import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CampaignGallery from "../campaignGallery"


const OurSolution = () => (
    <section>
        <Container className="sectionTwoBg">
        <Row className="sectionTwoRow">
        <Col className="colHowUse">
          <CampaignGallery />
</Col>
        <Col className="colHowUse">
            <div className="galleryCaption" style={{verticalAlign: 'middle'}}>
                <h3>How Will You Use Them?</h3>
                <br />
                <p>
            COVID-19 killing wands. </p>
            <p>
              Seriously. We are finalizing research on the most efficient and cost effective method to distribute instruments fitted with UV-C LED light diodes, and currently one of our favored solutions is an industrial wand with LED diodes on one side. </p>
              <p>
              Medical equipment such as masks, gowns, and various hospital surface areas could be disinfected on demand by a single person, waving the wand slowly over the item or surface area they wish to disinfect. 
              {" "}
              
              </p>

              <p>
                  Other solutions include light structures with powerful LED diodes facing all directions that can be turned on and of remotely. These structures can be placed in hospital rooms or other enclosed areas and turned on for a short period of time to disinfect everything in the room that the light touches.
              </p>
              <br />
              <br />

                {/*<h3>
                    What Exactly Are LEDs?
                </h3>
                <p>
                LEDs, or Light-emitting diodes (LEDs) are semiconductors consisting of a  stable structure or substrate, such as silicon or sapphire, covered (or doped) in precise materials, which are alternatively missing or supplying electrons from their outer shell. 
                As a voltage is applied, the  free electrons flowing  through the circuit  “fall” into the microscopic holes – or spaces in the electron ring – due to impurities in the doped substrate. By falling into a lower energy state, they release their excess energy in the form of light.</p>
                {/*The wavelength or color released can depend on the bandgap, or drop in energy, between the materials.
                </p>*/}
                </div>
                </Col>
                
                
                
               

            </Row>

        </Container>
    </section>
)

export default OurSolution