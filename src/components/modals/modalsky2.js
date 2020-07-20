import React from "react"
import Button from "../reusable/button"

//import Hydroveggie from '../images/1-young-tomato-468x312.jpg'
import Modalpics102 from "./modalpics102"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Modal from "react-modal"

import { Hydroveggie } from "../../images/index"

class Modalsky2 extends React.Component {
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
    /* var SynergyModalDialog2 = {
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
      <div /*id="modal2"*/>
        <Card>
          <Card.Img
            top="true"
            width="100%"
            src={Hydroveggie}
            className="img fit"
            alt="Card image cap"
          />
          <Card.Body>
            <Card.Title>
              <h3>
                Growing Healthy Vegetable Gardens Anywhere with RGB LED Lights
              </h3>
            </Card.Title>
            <div>
              <div>
                <Button synergy onClick={this.handleModalOpen}>
				LEARN ABOUT GROWING GARDENS WITH RGB LEDS
                </Button>
              </div>
              <Modal
                isOpen={this.state.isModalOpen}
                onRequestClose={this.handleModalClose}
                contentLabel="RGB LED Grow Lights"
                id="modal2"
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
                      <h2>RGB LED Grow Lights</h2>
                    </Col>
                  </Row>
                  <div>
                    <Modalpics102 />
                  </div>
                  <div>
                    <h1>More information</h1>
                  </div>
                </Container>
              </Modal>
              {/*</SkyLight>*/}
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

Modalsky2.displayName = "Modalsky2"

export default Modalsky2
