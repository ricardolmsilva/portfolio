import React from "react"

import { AboutSection } from "./styles"
import { graphql } from "gatsby"
import { useStaticQuery } from "gatsby"

export default function About() {
  const {
    airtable: {
      data: { about },
    },
  } = useStaticQuery(graphql`
    query {
      airtable(table: { eq: "About Me" }) {
        data {
          about: Text
        }
      }
    }
  `)

  let paragraphs = about.split("\n")

  return (
    <AboutSection>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </AboutSection>
  )
}
