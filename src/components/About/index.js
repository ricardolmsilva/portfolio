import React from "react"

import { AboutSection } from "./styles"
import { graphql } from "gatsby"
import { useStaticQuery } from "gatsby"

export default function About() {
  const {
    allAirtable: { content },
  } = useStaticQuery(graphql`
    query {
      allAirtable(
        filter: { table: { eq: "About Me" } }
        sort: { fields: data___Date, order: DESC }
      ) {
        content: nodes {
          data {
            about: Text
          }
        }
      }
    }
  `)

  let paragraphs = []
  for (let text of content) {
    const { about } = text.data
    if (about !== null) {
      paragraphs = about.split("\n")
      break
    }
  }

  return (
    <AboutSection>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </AboutSection>
  )
}
