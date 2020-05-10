import React from "react"

import SEO from "../components/Seo"
import Section from "../components/Section"

import Menu from "../components/Menu"
import Intro from "../components/Intro"
import About from "../components/About"
import Skills from "../components/Skills"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"

export default () => {
  return (
    <>
      <SEO />
      <header>
        <Menu />
      </header>
      <main>
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
      </main>
      <Footer />
    </>
  )
}
