import React from "react"
//import '../css/carrd.css'

import { Logo } from "../../../images/index"
import Modalmailing from "../../modals/modalmailing"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import homeStyle from "./home.module.css"

const Homehero = () => (
  <>
  <section className={homeStyle.heroSection}>
    <Container>
    <div className={homeStyle.heroInner}>
    <div /*id="image04"*/ className={homeStyle.LogoDiv}>
          <img src={Logo} alt="" />
        </div>
        <h1 /*id="text01"*/ className={homeStyle.heroTitle}>
          <mark className={homeStyle.HeadLine}>Global lighting Project</mark>
        </h1>
        <h2 /*id="text04"*/ className={homeStyle.SubHeadLine}>
          <strong>Empowering The World</strong>
        </h2>
      </div>
    </Container>

    <Container>
      <p /*id="text08"*/ className={homeStyle.heroSummary}>
        Alternative Energy Will Change The World.
        <br />
        <br />
        We work with community-local organizations to supply renewable, LED
        solar-powered lighting and energy solutions directly to where they are
        needed
      </p>
    </Container>
    <Container
      /*id="container02"*/
      /*className="container default" * / style={{ display: "inline-block" }} */
    >
      <div>
        <h3 /*id="text06"*/ className={homeStyle.heroCTA}>
          Donate Now and Join Our Mailing List to Join Us on Our Mission
        </h3>
      </div>
    </Container>

      <Container
        style={{
          margin: "1rem auto",
          padding: "1rem 0",
        }}
      >
        <Row className={homeStyle.heroCTAButtons} >
          <Col>
            <div id="embed04" className={homeStyle.heroDonateDiv}>
              <a
                className={homeStyle.DboxDonateBtn}
                href="https://donorbox.org/global-lighting-project"
              >
                Donate
              </a>
            </div>
          </Col>
          <br />
          <Col>
            <Modalmailing />
          </Col>
        </Row>
      </Container>
  </section>
</>
)

export default Homehero
