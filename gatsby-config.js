require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Ricardo Silva",
    description: "Web Portfolio",
    author: "Ricardo Silva",
    siteUrl: "https://www.ricardolmsilva.site",

    contacts: {
      email: {
        url: "ricardolmsilva@me.com",
        alt: "Go to my profile of github",
      },
      github: {
        url: "https://github.com/ricardolmsilva",
        alt: "Go to my profile of github",
      },
      dribbble: {
        url: "https://dribbble.com/ricardolmsilva",
        alt: "Go to my profile of dribbble",
      },
      linkedin: {
        url: "https://www.linkedin.com/in/ricardolmsilva",
        alt: "Go to my profile of linkedin",
      },
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `babel-plugin-styled-components`,
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
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        color: "#000",
        height: "3px",
        paths: ["/"],
        zIndex: `9999`,
      },
    },
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ricardo Silva",
        start_url: `/`,
        background_color: "#fff",
        theme_color: "#fff",
        display: "standalone",
        short_name: "Portfolio",
        icon: `src/resources/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
