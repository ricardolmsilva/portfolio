require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Ricardo Silva",
    description: "Web Portfolio",
    author: "Ricardo Silva",
    siteUrl: "https://www.ricardolmsilva.site",
    email: "ricardolmsilva@me.com",
    Github: "https://github.com/ricardolmsilva",
    Dribble: "https://dribbble.com/ricardolmsilva",
    LinkedIn: "https://www.linkedin.com/in/ricardolmsilva",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: `apprAgTICmIrMzlpw`,
            tableName: `About Me`,
            tableView: `Grid view`,
          },
          {
            baseId: `apprAgTICmIrMzlpw`,
            tableName: `Projects`,
            tableLinks: [`Technologies`],
          },
          {
            baseId: `apprAgTICmIrMzlpw`,
            tableName: `Technologies`,
            tableLinks: [`Types_of_Technology`, `Projects`],
          },
          {
            baseId: `apprAgTICmIrMzlpw`,
            tableName: `Types of Technology`,
            tableLinks: [`Technologies`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/resources/images`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== "production",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`, `400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ricardo Silva",
        start_url: `/`,
        background_color: "#fff",
        theme_color: "#fff",
        display: "standalone",
        short_name: "Ricardo Silva - Web Portfolio",
        icon: `src/resources/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        color: "#000",
        height: "3px",
        paths: ["/"],
        zIndex: `9999`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
