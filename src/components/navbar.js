import React from "react"
/*import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"*/
import { Link } from "gatsby"
import { Logo } from "../images/index"
import "../css/navbar.css"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from './reusable/button'

class NavbarGlobal extends React.Component {
  state = {
    isOpen: false,
    width: "0px",
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  openNav = () => {
    this.setState({
      width: "270px",
    })
  }

  closeNav = () => {
    this.setState({
      width: "0px",
    })
  }

  render() {
    return (
      <div>
        <Navbar className="navigation fixed-top" display="none" expand="md">
          <div className="container">
            <Navbar.Brand to="/" as={Link} className="order-0">
              <img src={Logo} className="logo-img-fluid" alt="" />
            </Navbar.Brand>

            <Navbar.Collapse
              isOpen={this.state.isOpen}
              style={{ textAlign: "center" }}
            >
              <Nav
                className="mx-auto order-1 "
                style={{ justifyContent: 'space-between', fontWeight: "bold", display: "flex" }}
              >
                <Nav.Item>
                  <Nav.Link
                    to="/"
                    as={Link}
                    style={{ fontSize: 18, fontStyle: "bold" }}
                  >
                    HOME
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    
                    to="/about"
                    as={Link}
                    style={{ fontSize: 18 }}
                  >
                    ABOUT
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    
                    to="/campaigns"
                    tag={Link}
                    style={{ fontSize: 18 }}
                  >
                    CAMPAIGNS
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    
                    to="/contact"
                    tag={Link}
                    style={{ fontSize: 18 }}
                  >
                    CONTACT
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
            <div className="donate-btn custom-dbox-popup">
              <a
                href="https://donorbox.org/fighting-covid-19-with-ultraviolet-led-light"
                id="donate-btn"
              >
                Donate
              </a>
            </div>
          </div>
        </Navbar>
        {/* Hamburger Navbar for smaller screens */}
        <div
          className="Hamburger-Navbar"
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "1.45rem 1.0875rem",
            color: "#ffc529",
          }}
        >

          <div
            id="mySidenav"
            className="sidenav"
            style={{ width: this.state.width, height: "100%" }}
          >
            <div>
              <a className="closebtn" onClick={this.closeNav}>
                &times;
              </a>
            </div>
            <Link className="list" to="/">
              HOME
            </Link>
            <Link className="list" to="/about">
              ABOUT
            </Link>

            <Link className="list" to="/campaigns">
              CAMPAIGNS
            </Link>


            <Link className="list" to="/contact">
              CONTACT
            </Link>

            <div style={{ padding: 20 }}>
              <div
                className="donate-btn-container"
                style={{ paddingTop: 10, paddingBottom: 10 }}
              >
                {/*<a
                  href="https://donorbox.org/fighting-covid-19-with-ultraviolet-led-light"
                  id="donate-btn-hamburger"
                >*/}
                  <Button href="https://donorbox.org/fighting-covid-19-with-ultraviolet-led-light" id="donate-btn-hamburger">
                  Donate
                  </Button>
                {/*</a>*/}

              </div>
            </div>
          </div>
          <span
            className="openNavBtn"
            style={{
              fontSize: "40px",
              marginTop: 8,
              cursor: "pointer",
              float: "right",
            }}
            onClick={this.openNav}
          >
            &#9776;
          </span>
        </div>
      </div>
    )
  }
}

export default NavbarGlobal
