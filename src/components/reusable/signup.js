import React from "react"
import { navigate } from "gatsby"
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

//import "../css/signup.css"

import signupStyle from './signup.module.css'

//    <section id="signup-section">
//        <div id="container03" className="container default">
//const Signup = () => (
/* <div className="inner">
            <h3 id="text02">Join Our Mailing List to keep up with us and receive the latest updates </h3>
            <form id="form01" method="post">
              <div className="inner">
                <div className="field">
                  <input type="email" name="email" id="form01-email" placeholder="Email" maxLength={128} required />
                </div>
                <div className="field">
                  <div className="checkbox">
                    <input type="checkbox" name="consent" id="form01-consent" defaultValue="checked" required />
                    <label htmlFor="form01-consent">
                      <span>I accept the above information will be used to subscribe me to this list.</span>
                    </label>
                  </div>
                </div>
                <div className="field">
                  <input type="text" name="site-url" id="form01-site-url" placeholder="Site Url" maxLength={128} />
                </div>
                <div className="actions">
                  <button type="submit">
                    
                    <p className="label">Submit</p>
                  </button>
                </div>
              </div>
              <input type="hidden" name="id" defaultValue="form01" />
            </form>
            {/**<ul id="buttons01" className="buttons">
              <li>
                <a href="#home" className="button n01">No thanks</a>
              </li>
            </ul>** /}
          </div>
       </div>
</section> */

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function SignUpForm() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error))
  }
  return (
    <>
      <Container>
        <div className={signupStyle.SignUpTitle}>
        <h3 id="text02">Join Our Mailing List to keep up with us and receive the latest updates </h3>
        </div>
        <form
          name="SignUpForm"
          method="post"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="SignUpForm" />

          <Form.Row>
              <Form.Group>
                <label style={{ display: "none" }} htmlFor="name">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                />
              </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group>
                <label htmlFor="name" style={{ display: "none" }}>
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  required
                  onChange={handleChange}
                />
              </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group>
              <label htmlFor="email" style={{ display: "none" }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Check>
              <label htmlFor="consent" /* style={{ display: "none" }}*/>
                <span>
                  I accept the above information will be used to subscribe me to
                  this list.
                </span>
              </label>
              <input
                type="checkbox"
                name="consent"
                id="consent"
                required
                onClick={handleChange}
              />
            </Form.Check>
          </Form.Row>

          {/* {['checkbox', 'radio'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check type={type} 
              id={`default-${type}`}
              label={`default ${type}`}
      />
                </div>
         </Form.Row>*/}
          {/* <div className="field">
                  <div className="checkbox">
                    <input type="checkbox" name="consent" id="form01-consent" defaultValue="checked" required />
                    <label htmlFor="form01-consent">
                      <span>I accept the above information will be used to subscribe me to this list.</span>
                    </label>
                  </div>
          </div>*/}

          <Form.Group>
            <ul className="actions">
              <li>
                <Button
                  type="submit"
                  value="Subscribe"
                  className="special"
                  className={signupStyle.SubmitButton}
                  onChange={handleSubmit}
                >
                  Submit{" "}
                </Button>
              </li>
            </ul>
          </Form.Group>
        </form>
      </Container>
    </>
  )
}

