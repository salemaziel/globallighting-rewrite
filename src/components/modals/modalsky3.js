import React from "react"
import { navigateTo } from 'gatsby'
import Button from "../reusable/button"

import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
//import UVsterilize from '../images/synergy-water-3-468x312.jpg'
import Modalpics103 from "./modalpics103"


import { UVsterilize, WholeRoom_1 } from "../../images/index"

import Modal from "react-modal"

class Modalsky3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }

  handleModalOpen = (event) => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true })
  }

  handleModalClose = (event) => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }

  render() {
    /* var SynergyModalDialog3 = {
		backgroundColor: '#fff',
		color: '#000',
		width: '90%',
		height: '80%',
		marginTop: '-13%',
		marginLeft: '-45%',
		borderRadius: '5px',
		overflowY: 'scroll',
		transform: 'none!important',
		/*margin: '1rem',* /
		padding: '2rem'
	  };

	  var title = {
		margin: '0 3rem',
		padding: '0 3rem',
	}*/

    return (
      <div /*id="modal3"*/>
        <Card>
          <Card.Img
            top="true"
            width="100%"
            src={WholeRoom_1}
            className="img fit"
            alt="Card image cap"
          />
          <Card.Body>
            <Card.Title>
              <h3>
                Sanitizing Water, Cooking Facilities and More with Ultra Violet
                LED Lights
              </h3>
            </Card.Title>
            <div>
              <div>
                <Button covid19 onClick={() => navigateTo("/campaigns/covid-19")}>
				LEARN ABOUT UV LEDS & OUR COVID-19 CAMPAIGN                </Button>
              </div>
              {/*<Modal
                isOpen={this.state.isModalOpen}
                onRequestClose={this.handleModalClose}
                contentLabel="Ultra Violet LED"
                id="modal3"
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                shouldReturnFocusAfterClose={true}
                className="modalSynergy"
                overlayClassName="modalSynergyOverlay"
              >
                <Container>
                  <Row
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Col>
                      <h2>UltraViolet (UV) LED Light</h2>
                    </Col>
                  </Row>
                  <div>
                    <Modalpics103 />
                  </div>
                </Container>
				</Modal>*/}
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

Modalsky3.displayName = "Modalsky3"

export default Modalsky3
