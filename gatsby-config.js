/**
 * @type {import('gatsby').GatsbyConfig}
 */
const i18nConfig = require('./i18n-config');
const siteUrl = process.env.URL || `http://localhost:8000`;

module.exports = {
    siteMetadata: {
      siteUrl: `https://solange.dev`,
      title: `Sol around Blockchain`,
      description: `Blockchain developers blog`,
      author: `Solange Gueiros`,
      twitterUsername: `@solangegueiros`,
      image: `/favicon.png`,       
    },
    plugins: [
      {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/src/pages`,
            name: `pages`,
          },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/locales`,
          name: `locale`,
        },
      },
      {
          resolve: "gatsby-source-filesystem",
          options: {
            name: `blog`,
            path: `${__dirname}/content/blog`,
          }
      },
      {
          resolve: "gatsby-source-filesystem",
          options: {
            name: `docs`,
            path: `${__dirname}/content/docs`,
          }
      },        
      {
        resolve: `gatsby-plugin-react-i18next`,
        options: {
          ...i18nConfig,
          siteUrl: siteUrl, // Already in siteMetadata, just repeat here
          i18nextOptions: {
            fallbackLng: i18nConfig.defaultLanguage,
            supportedLngs: i18nConfig.languages,
            defaultNS: i18nConfig.defaultNS,          
            interpolation: {
              escapeValue: false, // React already does escaping
            },
          },
        },    
      },    
      `gatsby-plugin-mdx`,    
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sass`,
    ]
}