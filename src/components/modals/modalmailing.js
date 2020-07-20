import React from "react"
import Button from "../reusable/button"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Modal from "react-modal"
import Signup from "../reusable/signup"

import modalStyle from './modal.module.css'

class Modalmailing extends React.Component {
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
      <>
        <div id="embed04">
          <Button mailinglist onClick={this.handleModalOpen}>
            Mailing List
          </Button>
        </div>
        <Modal
          id="modalmailing"
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          contentLabel="Join Our Mailing List"
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          shouldReturnFocusAfterClose={true}
          className={modalStyle.modalmailing}
          overlayClassName={modalStyle.modalmailingOverlay}
        >
          
          <Container style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center'}}>


            <div>
              <Signup />
            </div>
            <div>
              <Button signup onClick={this.handleModalClose}>
                No thanks
              </Button>{" "}
            </div>
          </Container>
        </Modal>
      </>
    )
  }
}

Modalmailing.displayName = "Modalmailing"
Modal.setAppElement(`#___gatsby`)

export default Modalmailing
