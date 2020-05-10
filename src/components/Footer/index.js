import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FaGithub, FaDribbble, FaLinkedinIn } from "react-icons/fa"

import { FooterContainer } from "./styles"

export default function Footer() {
  const data = useStaticQuery(
    graphql`
      query {
        allSite {
          nodes {
            siteMetadata {
              contacts {
                dribbble {
                  alt
                  url
                }
                email {
                  url
                  alt
                }
                github {
                  alt
                  url
                }
                linkedin {
                  alt
                  url
                }
              }
            }
          }
        }
      }
    `
  )
  const { contacts } = data.allSite.nodes[0].siteMetadata

  return (
    <FooterContainer id="footer">
      <a href={`mailto:${contacts.email.url}`} alt={contacts.email.alt}>
        {contacts.email.url}
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            href={contacts.github.url}
            target="_blank"
            rel="noopener noreferrer"
            alt={contacts.github.alt}
          >
            <FaGithub />
          </a>
        </li>
        <li className="social-list__item">
          <a
            href={contacts.dribbble.url}
            target="_blank"
            rel="noopener noreferrer"
            alt={contacts.dribbble.alt}
          >
            <FaDribbble />
          </a>
        </li>
        <li className="social-list__item">
          <a
            href={contacts.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            alt={contacts.linkedin.alt}
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </FooterContainer>
  )
}
