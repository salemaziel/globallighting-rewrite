import React from 'react'


import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


import {
    FaAngleRight
} from 'react-icons/fa'

//import '../../css/HomePageCss/actionComponent.css'

import homeStyle from './home.module.css'

const ActionComponent = () => (
    <section
        className={homeStyle.sectionFour}>
	<Container>
    	<Row className={homeStyle.cxLeftRight}>
        	<Col xs={12} sm={6}> 
            	<div className={homeStyle.cxLeft}>
                	<h2>
                    The World Changes Together, <br />
                    No One Can Do It Alone. <br />
                    </h2>
                    <h3>
                    Help Us Empower Others.<br />
                    Let's Ensure A Brighter
                    World For Everyone.
                    </h3>    
                        
                    
                </div>
            </Col>
            <Col>
            	<div className={homeStyle.cxRight}>
                        	<a href="https://donorbox.org/fighting-covid-19-with-ultraviolet-led-light" className={homeStyle.Donate}>
                                Donate now
                                <span 
                                className={homeStyle.DonateSpan}
                                style={{
                                        position:'absolute',
                                        right:'15px',
                                        lineHeight:'50px'
                                    }}>
                                <FaAngleRight />
                                </span>
                            </a>
                </div>
            </Col>
        </Row>

    </Container>
</section>
)

export default ActionComponent
