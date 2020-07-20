import React from "react"
import Button from "../reusable/button"

//import Nightlight from '../images/stock-nightlight-468x312.jpg'
import Modalpics101 from "./modalpics101"

import Modal from "react-modal"

import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { Nightlight } from "../../images/index"

class Modalsky1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      className: "",
      shouldCloseOnOverlayClick: "",
      shouldCloseOnEsc: "",
      shouldReturnFocusAfterClose: "",
      contentLabel: "",
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
    return (
      <div /*id="modal1"*/>
        <Card>
          <Card.Img
          top="true"
            width="100%"
            src={Nightlight}
            className="img fit"
            alt="Card image cap"
          />
          <Card.Body>
            <Card.Title>
              <h3>
                Lighting the way for Homes, Schools, and Businesses with White
                LED Lights
              </h3>
            </Card.Title>
            <div>
              <Button synergy onClick={this.handleModalOpen}>
				LEARN ABOUT LIGHTING WITH WHITE LED LIGHTS
              </Button>
              <Modal
                isOpen={this.state.isModalOpen}
                onRequestClose={this.handleModalClose}
                contentLabel="White LED Lighting"
                id="modal1"
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
                      <h2>White LED Lighting</h2>
                    </Col>
                  </Row>

                  <div>
                    <Modalpics101 />
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

Modalsky1.displayName = "Modalsky1"

export default Modalsky1
