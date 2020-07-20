import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "../button"
import CampaignSection4 from "./sectionFour"

const CampaignSection1 = () => (
  <section>
    <Container className="sectionOneBg">
      <Row className="sectionOneRow">
        <Col className="colCampaignAbout">
          <h2>About Our COVID-19 Campaign</h2>
          <br />
          <p>
            The COVID-19 virus has spread around the globe at a relently fast
            pace, unprecedented in modern times. It is highly contagious,
            remaining alive on contaminated surfaces for days, and is able to be
            spread widely and quickly by unaware carriers, due to its incubation
            period lasting up to 14 days.
          </p>
          <p>
            Healthcare workers are especially at risk. With emergency equipment
            like masks and ventilators in short supply nation-wide, hospitals
            need other solutions to keep our doctors, nurses, and other staff as
            safe from catching the very disease they are trying to treat.
          </p>
          <br />
          <p style={{ textAlign: "center" }}>
            <strong>Our solution: UltraViolet LED Lights.</strong>
          </p>
          <br />
          <p>
            UV is a known disinfectant for water, air, and other surfaces, and
            when applied correctly can be used to mitigate the risk of both
            viral and bacterial pathogens, two of which include the
            genetically-related SARS-CoV-1 and MERS-CoV coronaviruses.
            <br />
          </p>
          <p>
            With access to powerful UV-C LED lights, the Global Lighting Project
            is in a unique position to supply aid to some of the unsung heroes
            of our society that are healthcare workers.
          </p>
          <p>
            <strong>
              <em>But we need your help.</em>
            </strong>
          </p>
        </Col>
        <Col className="colCampaignAbout">
          {/*<Col className="boxDonateOuter">*/}
          <Container className="boxDonateInner">
            <h2>Give What You Can</h2>
            <p>
              Your donation today will go directly to research, testing,
              manufacturing, and distributing our disinfecting LED light
              instruments to hospitals and other healthcare facilities around
              the nation.
            </p>
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <Button
                campaign
                href="https://donorbox.org/fighting-covid-19-with-ultraviolet-led-light"
              >
                Donate Now
              </Button>
            </div>
          </Container>
          {/*</Col>*/}
        </Col>
      </Row>
      {/*<Row>
        <CampaignSection4 />
      </Row>*/}
    </Container>
  </section>
)

export default CampaignSection1
