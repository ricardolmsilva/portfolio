import React from "react"

import Section from "../components/Section"
import Menu from "../components/Menu"
import Intro from "../components/Intro"
import About from "../components/About"
import Skills from "../components/Skills"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"
import SEO from "../components/Seo"

export default () => {
  return (
    <>
      <SEO />
      <Menu />
      <Section id="intro" viewportHeight>
        <Intro />
      </Section>
      <Section id="about" title="About me" background>
        <About />
      </Section>
      <Section id="skills" title="Skills">
        <Skills />
      </Section>
      <Section id="portfolio" title="Portfolio" background>
        <Portfolio />
      </Section>
      <Footer />
    </>
  )
}
