import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from "../button"

import CampaignGallery from "./campaignGallery"

const CampaignSection2 = () => (
  <section>
    <Container className="sectionTwoBg">
      <Row className="sectionTwoRow">
        <Col className="colCampaignGallery">
          <CampaignGallery />
        </Col>
        <Col className="colCampaignGallery">
          <h2>UV-C LED Light Disinfectant Wands</h2>
          <h3>Technical Specifications </h3>
          <ul>
            <li>5W LED system</li>
            <li>Multiple Connection</li>
            <li>5VDC with 12VDC</li>
            <li>120VAC, and Battery Pack inverters</li>
            <li>Industrial UVC 254nm LEDs</li>
            <li>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </section>
)

export default CampaignSection2
