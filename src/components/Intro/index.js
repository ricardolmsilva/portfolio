import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FaChevronDown } from "react-icons/fa"
import scrollTo from "gatsby-plugin-smoothscroll"

import { IntroContainer, ImageContainer } from "./styles"

export default function Intro() {
  const data = useStaticQuery(graphql`
    query PhotoImage {
      image: file(relativePath: { eq: "photo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <IntroContainer>
      <div>
        <h1>
          Hi, I'm
          <strong>
            <span>Ricardo Silva</span>
          </strong>
        </h1>
        <p>Web Developer</p>
        <ImageContainer>
          <Img
            fluid={data.image.childImageSharp.fluid}
            alt="Ricardo Silva"
            loading="eager"
          />
        </ImageContainer>
      </div>
      <FaChevronDown className="arrow" onClick={() => scrollTo("#about")} />
    </IntroContainer>
  )
}
