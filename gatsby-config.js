module.exports = {
    siteMetadata: {
        siteUrl: `https://solange.dev`,
        title: `Blockchain Blog Sol`,
        description: `Blockchain developers blog`,
        author: `Solange Gueiros`,        
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        `gatsby-remark-images`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/src/pages`,
              name: `pages`,
            },
        },        
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/content/blog`,
            }
        },
        /*
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/content/event`,
            }
        },
        */
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-theme-i18n`,
            options: {
                defaultLang: `en`,
                locales: `en es pt`,
                configPath: require.resolve(`./i18n/config.json`),
            },
        },        
        {
            resolve: `gatsby-theme-i18n-react-i18next`,
            options: {
                locales: `./i18n`,
                i18nextOptions: {
                    ns: ["translation", "blog", "404"],
                },
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts: {
                    default: require.resolve(`./src/components/layout.js`),
                },
                gatsbyRemarkPlugins: [
                    {
                      resolve: `gatsby-remark-images`,
                      options: {
                        maxWidth: 1024,
                        sizeByPixelDensity: true,
                      },                      
                    },
                    `gatsby-remark-responsive-iframe`,
                ],
            },
        },
        "gatsby-transformer-sharp",        
    ]
}