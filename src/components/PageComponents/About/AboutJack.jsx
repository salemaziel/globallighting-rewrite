import React from "react"

import { JackonMtn } from "../../../images/index"
import Container from "react-bootstrap/Container"

const AboutJack = () => (
  <Container
    className="aboutjack"
    style={{
      marginTop: "2em",
    }}
  >
    <div
      className="row"
      style={{
        padding: "2em 4em 2em 1em",
      }}
    >
      <h1 className="title">
        OUR <span>STORY</span>
      </h1>
    </div>

    <div className="row">
      <div className="col-lg-7">
        <p>
          Founder and CEO of the Global Lighting Project, Jack Dubord, is a
          father, a musician, and an entrepreneur. As a business owner, he has
          been working in the industry of renewable energy and efficient
          lighting for over 20 years. <br />
          <hr />
          <br />
        </p>
        <p>
          Where did it begin? <br />
          <hr />
          At the age of 17, Jack discovered that venues where his band were
          scheduled to play were a hundred times more welcoming if he designed
          and built light structures to use at their shows. That clever little
          discovery soon became more than a hobby for him. He turned it into a
          business.
          <br />
        </p>
        <p>
          Over time, he made key contacts with large, high-tech manufacturers,
          as well as clients looking for large quantities of the kinds of things
          he’d learned to build. With a little luck and a lot of hard work, he
          build his first company, SLN Signs. In 2004, he started a second
          company called LEDPAC, and focused on the emerging technology of LED
          lighting.
        </p>
        <p>
          {" "}
          He has now successfully sold this amazing technology for over two
          decades, and the versatility and uses of LED lights continue to
          astound him. However, eventually, he came to realize that he could do
          so much more; that it is not only those with money and resources who
          deserve this technology. It could be used for good – for those less
          fortunate.
        </p>
        <p>
          LED and light technology has been a hobby, passion, and career for
          Jack. As a child, he was blessed to have access to lights he could
          experiment and build with; something not everyone has. That is why he
          decided to share his passion, hobby, and life's work with the rest of
          the world, and to utilize it to enrich and benefit the lives of
          others.
        </p>
        <p>
          And that’s when the Global Lighting Project became more than an idea;
          it became a reality.
        </p>
      </div>

      <div className="col-lg-3">
        <img
          className="thumbnail"
          src={JackonMtn}
          alt=""
          style={{
            border: "5px",
            borderRadius: "100%",
          }}
        ></img>
        <div
          style={{
            textAlign: "center",
            display: "inline-block",
          }}
        >
          <p>
            <span>
              <strong>Jack Dubord</strong>
            </span>
          </p>
          <p>CEO - Founder</p>
        </div>
      </div>

      <div className="col-lg-12 quote">
        "The Meaning of Life is to Find Your Gift; the Purpose of Life is to
        Give it Away"
      </div>
    </div>
  </Container>
)

export default AboutJack
