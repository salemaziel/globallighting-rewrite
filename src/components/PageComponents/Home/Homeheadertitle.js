import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

//import "../../css/HomePageCss/homeheadertitle.css"
import homeStyle from "./home.module.css"

const Homeheadertitle = () => (
  <section className={homeStyle.hheader}>
    <Container>
      <Row className={homeStyle.headline}>
        <div className="col-lg-12">
          <h2>
            We believe in a{" "}
            <span className={homeStyle.greenText}>sustainable</span> world,
            where life can{" "}
            <span className={homeStyle.orangeTextTitle}>thrive</span>
          </h2>
        </div>
      </Row>
      <Row>
        <div className="col-lg-12">
          <h3>
            Over 1.6 Billion people still live without reliable access to
            electricity, clean water, sanitary cooking facilities, or the
            resources necessary to grow food for themselves or their families.
            Using the power of renewable energy, revolutionary LED light
            solutions, and technology workshops in developing communities,{" "}
            <span className={homeStyle.orangeTextSubtitle}>
              the Global Lighting Project is on a mission to change that.
            </span>
          </h3>
        </div>
      </Row>
    </Container>
  </section>
)

export default Homeheadertitle
