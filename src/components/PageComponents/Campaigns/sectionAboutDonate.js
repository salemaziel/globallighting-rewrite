import React from 'react'
import Button from '../button'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CampaignSectionAboutDonate = () => (
    <section>
        <Container className="sectionAboutDonate">
            <Row className="sectionOneRow">
                {/*<Col className="colCampaignInfo">
                <h2>
                    About Our COVID-19 Relief Fund
                </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <Button campaign >
                    See The Research
</Button>
                
</Col>*/}
                <Col className="boxDonateOuter">
                    <Container className="boxDonateInner">
                        <h2>
                            Donate to Relief Fund
                        </h2>
                        <p>
                            Your donation today will go directly to research, testing, manufacturing, and distributing our disinfecting LED light instruments to hospitals and other healthcare facilities around the nation.
                        </p>
                        <Button campaign>
                            Donate
                        </Button>
                </Container>
                
                </Col>

            </Row>

        </Container>
    </section>
)

export default CampaignSectionAboutDonate