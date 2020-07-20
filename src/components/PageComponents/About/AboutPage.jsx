import React from "react"

import AboutIntro from "./AboutIntro"
import Quote1 from "./Quote1"
import AboutNeed from "./AboutNeed"
import AboutJack from "./AboutJack"

import '../../../css/about2.css'

const AboutPage = () => (
  <>
    <section className="section-about">
      <AboutIntro />
      <Quote1 />
      <AboutNeed />
      <AboutJack />
    </section>
  </>
)

export default AboutPage
