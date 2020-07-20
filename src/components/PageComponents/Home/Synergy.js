import React from "react"
//import PinkDotsImage from '../../images/pink-dots.jpg'

//import GlbImage from '../../images/glb.jpg'
//import SolarImage from '../../images/soalr.jpg'
//import LightsImage from '../../images/lightslight.jpg'
//import StreetLightImage from '../../images/street-light.jpg'
//import MicrolightImage from '../../images/microlight.jpg'
//import ContainedSolarImage from '../../images/containedsolar.jpg'
// import ContainedSolarImage from '../../images/containedsolar.jpg'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Box from "./box"

//import "../../css/HomePageCss/synergy.css"
import homeStyle from "./home.module.css"

const Synergy = () => (
  <section className={homeStyle.synergy}>
    <Container fluid className={homeStyle.synergyHeadline}>
      <Row className="justify-content-center">
        <Col xs={10} sm={8}>
              <h4 style={{margin: '2rem auto'}}>
                Bringing Light, the capacity to Grow Nutritious Food, and Clean
                Water Using{" "}
                <span className={homeStyle.orangeText}>
                  {" "}
                  LED Light Technology
                </span>
              </h4>
        </Col>
      </Row>

      <Row className={homeStyle.boxRow}>
        {/**<div className="col-lg-12">**/}
        <Box />
        {/**</div>**/}
      </Row>
    </Container>
  </section>
)

export default Synergy
