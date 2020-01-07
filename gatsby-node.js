const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    if (node.frontmatter.type == `blog`) {
      var slugAux = createFilePath({ node, getNode, basePath: `blog` })
    }
    else if (node.frontmatter.type == `talk`) {
      var slugAux = createFilePath({ node, getNode, basePath: `talks` })
    }
    const slug = slugAux
    console.log('slug: ', slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      postsRemark: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: {frontmatter: {type: {eq: "blog"}}}
        ) {      
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }

      talksRemark: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: {frontmatter: {type: {eq: "talk"}}}
        ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }  
  
  console.log(JSON.stringify(result, null, 4))

  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const posts = result.data.postsRemark.edges
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
      }
    })
  })

  const talkPostTemplate = path.resolve(`./src/templates/talk-post.js`)
  const talks = result.data.talksRemark.edges
  talks.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: talkPostTemplate,
      context: {
        slug: node.fields.slug,
      },      
    })
  })
  
}

