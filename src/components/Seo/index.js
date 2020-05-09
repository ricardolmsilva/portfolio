import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ lang, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata.description}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: `${site.siteMetadata.description}`,
        },
        {
          property: `og:title`,
          content: `${site.siteMetadata.title}`,
        },
        {
          property: `og:description`,
          content: `${site.siteMetadata.description}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `${site.siteMetadata.author}`,
        },
        {
          name: `twitter:title`,
          content: `${site.siteMetadata.title}`,
        },
        {
          name: `twitter:description`,
          content: `${site.siteMetadata.description}`,
        },
      ].concat(meta)}
    >
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}
export default Seo
