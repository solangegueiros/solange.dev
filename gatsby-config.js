require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://solange.dev`,
    title: `Blockchain Blog Sol`,
    description: `Blockchain developers blog`,
    author: `Solange Gueiros`,
    // author: {
    //   name: `Solange Gueiros`,
    //   twitter: `solangegueiros`,
    // }
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/solangegueiros`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/solangegueiros`,
      },
    ],    
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-BMC669W9LX",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields documented in Google Analytics
        name: "Solange.Dev",
        // cookieDomain: "example.com",
      },
    },    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `event`,
        path: `${__dirname}/content/event`,
      },
    },    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `presentations`,
        path: `${__dirname}/content/presentations`,
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        locales: process.env.LOCALES,
        configPath: require.resolve(`./data/i18n-config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-intl`,
      options: {
        defaultLocale: `./data/react-intl/en.json`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024
            },
          },
        ],        
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /flags/
        }
      }
    },    
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dev Blog Solange Gueiros`,
        short_name: `Dev Blog Sol`,
        description: `Blockchain developers blog, by Solange Gueiros`,
        start_url: `/`,
        background_color: `#FACC2E`,
        theme_color: `#FACC2E`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/sun-icon.png`,
      },
    },
    //The offline plugin should be listed after the manifest plugin so that the offline plugin can cache the created manifest.webmanifest.
    `gatsby-plugin-offline`,    
    `gatsby-plugin-sitemap`,
    
    
  ],
}
