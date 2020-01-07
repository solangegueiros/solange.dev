module.exports = {
  siteMetadata: {
    siteUrl: `https://solange.dev`,
    title: `Blockchain Blog Sol`,
    description: `Blockchain developers blog`,
    author: `solangegueiros`,    
  },  
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `talks`,
        path: `${__dirname}/content/talks/`,
      },
    },    
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },    
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}

