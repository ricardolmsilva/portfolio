import React from "react"
import { FaGithub, FaDribbble, FaLinkedinIn } from "react-icons/fa"

import { FooterContainer } from "./styles"

export default function Footer() {
  return (
    <FooterContainer id="footer">
      <a
        href="mailto:ricardolmsilva@me.com"
        className="footer__link"
        alt="Send me an email"
      >
        ricardolmsilva@me.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            href="https://github.com/ricardolmsilva"
            target="_blank"
            rel="noopener noreferrer"
            alt="Go to my Github profile"
          >
            <FaGithub />
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://dribbble.com/ricardolmsilva"
            target="_blank"
            rel="noopener noreferrer"
            alt="Go to my Dribbble profile"
          >
            <FaDribbble />
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://linkedin.com/in/ricardolmsilva"
            target="_blank"
            rel="noopener noreferrer"
            alt="Go to my LinkedIn profile"
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </FooterContainer>
  )
}
