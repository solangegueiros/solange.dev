const path = require(`path`)
const axios = require("axios")
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  const fetchFormItems = () =>
    axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/1I-wlIWNfzeYLIZTwcJ8jPTnz5QbGiXpWatznIJQniyI/values:batchGet?ranges=export&majorDimension=ROWS&key=AIzaSyBokDtXBsh8G5ryQTAut6A48jsD9P9Ryv4`
    )
  const response = await fetchFormItems()

  const arrayOfItems = response.data.valueRanges[0].values

  let rows = []
  for (var i = 1; i < arrayOfItems.length; i++) {
    var rowObject = {}
    for (var j = 0; j < arrayOfItems[i].length; j++) {
      rowObject[arrayOfItems[0][j]] = arrayOfItems[i][j]
    }
    rows.push(rowObject)
    //console.log (rowObject);
  }

  let itemsArrayWithTagsArray = rows.map(function(item) {  
    item.layout = 'event'
    
    //date convert
    if (item.date) {
      var dateString = item.date
      var dateParser = /(\d{2})\/(\d{2})\/(\d{4})/
      var dateMatch = dateString.match(dateParser)
      dateString = dateMatch[3]+'-'+ dateMatch[2]+'-'+ dateMatch[1] + "T00:00-03:00"
      dateObj = new Date(dateString)
      //console.log("dateObj", dateObj)
      item.date = dateObj.toISOString()
      //console.log("date", dateObj)  
    }
    item = { ...item }
    return item
  })

  itemsArrayWithTagsArray.map((item, i) => {
    const slug = `/${_.kebabCase(item.title)}/`    
    const itemNode = {
      id: createNodeId(`${i}`),
      parent: `__SOURCE__`,
      internal: {
        type: `item`, // name of the graphQL query --> allItem {}
        contentDigest: createContentDigest(item),
      },
      children: [],
      title: item.title,
      date: item.date,
      category: item.category ? item.category : '' ,
      tags: item.tags ? item.tags : '' ,
      local: item.local ? item.local : '' ,
      type: item.type ? item.type : '' ,
      organizer: item.organizer ? item.organizer : '' ,
      language: item.lang ? item.lang : '' ,
      video: item.video ? item.video : '' ,
      article: item.article ? item.article : '' ,
      slides: item.slides ? item.slides : '' ,
      links: item.links ? item.links : '' ,
      photos: item.photos ? item.photos : '' ,
      description: item.description ? item.description : '' ,
      marketing: item.marketing ? item.marketing : '' ,
      layout: item.layout,
      slug: slug
    }
    //console.log ("\n createNode:", itemNode);

    createNode(itemNode)
  })
}

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `item`) {
    if (node.layout == `event`) {
      //console.log('node: ', node)
      //const slug = `/${_.kebabCase(node.title)}/`      
      console.log('event slug: ', node.slug)

      createNodeField({
        node,
        name: `slug`,
        value: `/event${node.slug}`,
      })
      createNodeField({
        node,
        name: `locale`,
        value: node.language,
      })      
    }
  }
  else if (node.internal.type.toLowerCase() === `mdx`) {
    if (node.frontmatter.layout == `blog`) {
      createNodeField({
        node,
        name: `slug`,
        value: `/blog${node.frontmatter.slug}`,
      })      
      console.log('blog slug: ', node.frontmatter.slug)
    }
  }

}


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      blog: allFile(filter: { 
        sourceInstanceName: { eq: "blog" }, 
        extension: {regex: "/(md)|(mdx)/"}
      }) {
        nodes {
          childMdx {
            fields {
              slug
            }            
          }
          relativePath
        }
      }

      events: allItem (filter: {layout: {eq: "event"}}) {
        nodes {
          title
          fields {
            slug
          }
        }
      }      
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }

  //GraphQl result:
  console.log(JSON.stringify(result, null, 4))

  const blogPostTemplate = require.resolve(`./src/templates/blog-post.js`)
  //const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const blogPosts = result.data.blog.nodes
  blogPosts.forEach(({ childMdx: node }, index) => {
    if (!node) {
      console.log ("ERROR childMdx is NULL", blogPosts[index].relativePath)
      return
    }
    //var slug = node.frontmatter.slug
    var slug = node.fields.slug
    console.log('createPage slug: ', slug)

    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        slug: slug,
      },
    })
  })

  const eventPostTemplate = path.resolve(`./src/templates/event-post.js`)
  const items = result.data.events.nodes
  items.forEach(node => {
    console.log('createPage slug: ', node.fields.slug)

    createPage({
      path: node.fields.slug,
      component: eventPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })

}
