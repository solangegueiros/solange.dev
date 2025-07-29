const axios = require("axios")
const _ = require("lodash")
const path = require('path')
const config = require('./gatsby-config');
const { createFilePath } = require(`gatsby-source-filesystem`)

const i18nPlugin = config.plugins.find(
  p =>
    typeof p === 'object' &&
    p.resolve === 'gatsby-plugin-react-i18next'
);

const languages = i18nPlugin?.options?.languages || ['en'];
const defaultLanguage = i18nPlugin?.options?.defaultLanguage || 'en';

const blogTemplate = path.resolve(`./src/templates/blog-template.js`); 
const docTemplate = path.resolve(`./src/templates/doc-template.js`);
const eventTemplate = path.resolve(`./src/templates/event-template.js`);
const notTranslatedTemplate = path.resolve(`./src/templates/not-translated.js`);

//Load google spreadsheet
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
      item.year = dateObj.getUTCFullYear()
    }

    //check youtube link
    if (item.video && typeof item.video === 'string') {
      // Basic check for a YouTube link
      const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&]+)/;
      const match = item.video.match(youtubeRegex)
      if (match) {
        item.hasYouTube = true
        item.youtubeId = match[1] // This is the video ID
      } else {
        item.hasYouTube = false
      }
    } else {
      item.hasYouTube = false
    }
    //console.log ("\n hasYouTube:", item.hasYouTube);

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
      year: item.year ? item.year : '' ,
      category: item.category ? item.category : '' ,
      tags: item.tags ? item.tags : '' ,
      local: item.local ? item.local : '' ,
      type: item.type ? item.type : '' ,
      organizer: item.organizer ? item.organizer : '' ,
      language: item.lang ? item.lang : '' ,
      video: item.video ? item.video : '' ,
      hasYouTube: item.hasYouTube,
      youtubeId: item.youtubeId ? item.youtubeId : '' ,
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

// Helper to extract locale and isDefault
function extractLocale({ filePath, type }) {
  if (type === "blog") {
    const name = path.basename(filePath, ".mdx")
    const isDefault = name === "index"
    const locale = isDefault ? defaultLanguage : name.split(".")[1]
    return { locale, isDefault }
  }

  if (type === "doc") {
    const parts = filePath.split(/[/\\]/)

    // Find "docs" index
    const docsIndex = parts.findIndex(p => p === "docs")
    const maybeLang = parts[docsIndex + 1] // should be "en" or "pt"
    //console.log(`parts: ${JSON.stringify(parts, null, 2)}`);
    //console.log(`maybeLang: ${maybeLang}`);

    // Fallback if language is missing or invalid
    const locale = /^[a-z]{2}(-[a-zA-Z]{2})?$/.test(maybeLang)
      ? maybeLang
      : defaultLanguage

    const isDefault = locale === defaultLanguage
    return { locale, isDefault }
  }

  return null
}

function getSubpath(filePath) {
  const regex = /docs\/([a-z]{2})\/(.*)\/[^/]+\.mdx$/i;
  const match = filePath.replace(/\\/g, '/').match(regex);
  return match ? match[2] : '';
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    //console.log("node", JSON.stringify(node, null, 2));

    filePath = node.internal.contentFilePath;
    //console.log(`${filePath}`);
    const isDoc = filePath => /[/\\]docs[/\\][a-z]{2}(?:[/\\].+)?\.mdx$/.test(filePath);
    const isBlog = filePath => /[/\\]blog[/\\][^/\\]+[/\\]index(\.[a-z]{2})?\.mdx$/.test(filePath)
    //console.log(` isDoc: ${isDoc(filePath)} \t isBlog: ${isBlog(filePath)}`);

    // extract the filename without the extension
    const name = path.basename(filePath, ".mdx");
    
    //Doc Pages
    //en/page1
    //pt/page1
    if (isDoc(filePath)) {

      const match = filePath.match(/[/\\]docs[\/\\]([a-z]{2})[\/\\]/); // Match 'docs/<locale>/'
      const locale = match ? match[1] : null;
      const isDefault = locale === defaultLanguage;
      //console.log(`language: ${locale} \t isDefault: ${isDefault}`);
      
      const subfolder = getSubpath(filePath); // Extract subfolder path
      //console.log(`subfolder: ${subfolder}`);        
        
      createNodeField({ node,
        "name": "locale",
        "value": locale });
      createNodeField({ node,
        "name": "isDefault",
        "value": isDefault });
        createNodeField({ node,
          "name": "subfolder",
          "value": subfolder });          
    }

    //Blog pages
    //index.mdx is the default language
    //index.pt.mdx is the default language for pt-BR
    if (isBlog(filePath)) {
      const { locale, isDefault } = extractLocale({ filePath, type: "blog" })
      //console.log(`isDefault: ${isDefault}`);
  
      createNodeField({ node,
        "name": "locale",
        "value": locale });
      createNodeField({ node,
        "name": "isDefault",
        "value": isDefault });
        createNodeField({ node,
          "name": "subfolder",
          "value": "" });               
    }    
  }
  else if (node.internal.type === `item`) {
    if (node.layout == `event`) {
      //console.log('node: ', node)
      //console.log('event slug: ', node.slug)

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
};


exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;
  
    const result = await graphql(`
        {
          docs: allMdx(filter: {internal: {contentFilePath: {regex: "/docs/"}}}) {
            nodes {
              frontmatter {
                slug
                title
              }
              id
              fields {
                isDefault
                locale
                subfolder
              }
              internal {
                contentFilePath
              }
            }
          }
          blogList: allMdx(filter: {internal: {contentFilePath: {regex: "/blog/"}}}) {
            edges {
              node {
                id
                frontmatter {
                  slug
                }
                internal {
                  contentFilePath
                }
                fields {
                  isDefault
                  locale
                }
              }
            }
          }
          events: allItem (filter: {layout: {eq: "event"}}) {
            nodes {
              title
              slug
              fields {
                locale
              }
            }
          }                        
        }
    `);

    if (result.errors) {
      reporter.panicOnBuild('Error loading GraphQL result', result.errors)
    }

    console.log("\n\n");

    //DOCs PAGES
    const nodesDoc = result.data.docs.nodes;    
    console.log('Docs: ', result.data.docs.nodes.length);

    // Build a map like: { 'introduction': { en: node1, pt: node2 } }
    const pagesBySlug = {};

    nodesDoc.forEach(node => {
      const { id, name, frontmatter, fields } = node;
      const { slug } = frontmatter;
      const { isDefault, locale, subfolder } = fields; 
      //const subfolder = fields.subfolder || '';

      const pagePath = subfolder ? `/docs/${subfolder}/${slug}` : `/docs/${slug}`;
      console.log(pagePath);
      //console.log(`DOCs page slug: ${slug} \t language: ${locale} \t subfolder: ${subfolder} pagePath: ${pagePath}`);

      const pageData = {
        "path": pagePath,
        "component": docTemplate,
        "context": {
          id,
          "language": locale,
          slug,
          subfolder
        }
      };
      if (isDefault) createPage(pageData);

      //console.log(`✅ Create DOC page: ID: ${id} \t language: ${locale} \t slug: ${slug} \t path: ${pagePath}`);      
             
    });  


    //BLOG PAGES
    console.log("\n\n");
    const blogNodes = result.data.blogList.edges;
    console.log('BlogList: ', blogNodes.length);

    blogNodes.forEach((post, index) => {
      if (!post) {
        console.log("\n ERROR: post is NULL ", {index}, "\n", JSON.stringify(post, null, 2));
        return
      } 
      const { id, frontmatter, fields } = post.node;
      const { slug } = frontmatter;
      const { isDefault, locale } = fields;        
      
      const pagePath = `/blog/${slug}`;
  
      const pageData = {
        "path": pagePath,
        "component": blogTemplate,
        "context": {
          id,
          "language": locale,
          slug
        }
      };
      if (isDefault) createPage(pageData);
  
      console.log(`✅ Create BLOG page: /${locale}/blog/${slug} | ID: ${id}`);
    });
    
    console.log("\n\n");

    //EVENT PAGES
    const eventList = result.data.events.nodes
    console.log('Events: ', eventList.length);

    eventList.forEach(node => {
      var slug = node.slug

      //console.log('createPage slug: ', slug)
      createPage({
        path: '/events'+slug,
        component: eventTemplate,
        context: {
          slug: slug,
        },
      })
      console.log('event slug: ', slug)
    })
};

console.log("\n\n");

exports.onCreatePage = async ({ page, actions, getNodes }) => {
  const { createPage, deletePage } = actions;

  const { id } = page.context;  

  const isBlogPage = /\/src\/(pages\/blog\/|templates\/blog)/.test(page.component);  
  const isDocPage = /\/src\/(pages\/blog\/|templates\/doc)/.test(page.component);  

  //if (!id || !isBlogPage || !isDocPage) return;
  if (!isBlogPage && !isDocPage) return;
  console.log(`onCreatePage: ${page.path} | language: ${page.context.language} | ID: ${page.context.id}`)

};