import React from "react"
import "../css/about2.css"

import Jackonmtn from "../images/jack-edited-3.png"

const About2 = () => (
  <section className="section-about">
    <div className="container-fluid cfabout">
      <div className="container">
        <div className="row">
          <div className="col-md-12 cx_about">
            <h2>ABOUT OUR ORGANIZATION</h2>
            <h3>About the Global Lighting Project</h3>
            <div className="blurb">
              <p>
                The <strong>Global Lighting Project</strong> is a 501c3
                non-profit that is on a mission to ensure all people have access
                to light, electricity, clean water, and sanitary cooking
                facilities using cutting edge LED light technology.
              </p>
              <p>
                Originally founded in 2016 in San Diego, California, the Global
                Lighting Project team first set out to bring energy and light to
                impoverished communities in India, where many live daily without
                access to light or electricity.
                <br></br>
                The team at Global Lighting Project researches, builds or
                purchases, and transports this LED technology to local
                organizations working in the communities we seek to benefit. We
                act as a supplier, distributor and educator for these local
                groups, donating LED light kits and educating them on how the
                technology works, so that they, in turn, can bring that
                knowledge and technology to their communities to share and teach
                others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-12 quote">
      “It takes each of us to make a difference for all of us.” <br />- Jackie
      Mucheson
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-12 cx_about">
          <h2></h2>
          <h3 style={{ color: "#ffc529" }}>The Need:</h3>
          <p>
            Over 1.6 Billion people live without reliable access to electricity,
            clean water, sanitary cooking facilities, or the resources necessary
            to grow food.
            <br />
            The Global Lighting Project is on a mission to change that.
          </p>
          <h3 style={{ color: "#ffc529" }}>Our Vision:</h3>
          <p>
            We envision a world where renewable energy is accessible by all
            people to use at their discretion for the betterment of their
            communities.
          </p>
          <h3 style={{ color: "#ffc529" }}>Our Mission:</h3>
          <p>
            Our mission is to change the future for impoverished people around
            the world by supplying the power of renewable energy, revolutionary
            LED light solutions, and educational workshops that will sustain
            their communities for generations to come.
          </p>
          <h3 style={{ color: "#ffc529" }}>What We Do:</h3>
          <p>
            Our goal is to ensure all people have access to light, electricity,
            clean water, and sanitary cooking facilities by using cutting edge
            LED light technology. This includes white LEDs for energy-efficient
            lighting, RGB LEDs for growing food, and UV LEDs for
            sanitization/disinfection.
          </p>
          <p>
            By providing the technology and workshops on how to use the
            technology, we hope to make low-income, impoverished communities
            safer, healthier, and more sustainable.
          </p>

          <div className="col-lg-12 quote">
            “Our biggest challenge in this new century is to take an idea that
            seems abstract - sustainable development - and turn it into a
            reality for all the world's people." <br />̶ Kofi Annan
          </div>
        </div>
      </div>
    </div>
    <div
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
        {/*<h1 className="title">
          Hi, I'm{" "}
          <span>
            <strong> Jack </strong>
          </span>
      </h1>*/}
        <h1 className="title">
          OUR <span>STORY</span>
        </h1>
      </div>

      <div className="row">
        <div className="col-lg-7">
          <h3>
            Founder and CEO of the Global Lighting Project, Jack Dubord, is a
            father, a musician, and an entrepreneur. As a business owner, he has
            been working in the industry of renewable energy and efficient
            lighting for over 20 years. <br />
            <hr />
            <br />
            Where did it begin? <br />
            <hr />
            At the age of 17, Jack discovered that venues where his band were
            scheduled to play were a hundred times more welcoming if he designed
            and built light structures to use at their shows. That clever little
            discovery soon became more than a hobby for him. He turned it into a
            business.
            <br /> <hr />
            Over time, he made key contacts with large, high-tech manufacturers,
            as well as clients looking for large quantities of the kinds of
            things he’d learned to build. With a little luck and a lot of hard
            work, he build his first company, SLN Signs. In 2004, he started a
            second company called LEDPAC, and focused on the emerging technology
            of LED lighting.
            <br /> <hr />
            He has now successfully sold this amazing technology for over two
            decades, and the versatility and uses of LED lights continue to
            astound him. However, eventually, he came to realize that he could
            do so much more; that it is not only those with money and resources
            who deserve this technology. It could be used for good – for those
            less fortunate.
            <br /> <hr />
            LED and light technology has been a hobby, passion, and career for
            Jack. As a child, he was blessed to have access to lights he could
            experiment and build with; something not everyone has. That is why
            he decided to share his passion, hobby, and life's work with the
            rest of the world, and to utilize it to enrich and benefit the lives
            of others.
            <br /> <hr />
            And that’s when the Global Lighting Project became more than an
            idea; it became a reality.
            {/*} I began my interest with lighting at age 17, discovering that venues
            were a hundred times more welcoming to me and my band if I designed
            and built light structures to use at our shows. That clever little
            discovery soon became more than a hobby. I made key contacts with
            large, high-tech manufacturers, as well as clients looking for large
            quantities of what I had learned to build. <br />
            Several lucky chances and lots of hard work later, I built my first
            company, SLN Signs. Later, in 2004 I started a new company, LEDPAC,
    and focused on the amazing emerging technology that is LED lighting.*/}{" "}
            <br />
            <hr />
            {/**I have successfully sold this amazing technology for over two decades now through LEDPac, and the versatility and uses of LED lights still continue to astound me. 
                However, I came to realize that I could do so much more; that it is not only those with money and resources who deserve this technology, not when it has so much potential to benefit the people in ways the rest of us take for granted. <br />
                <hr />
                LED and light technology has been here for me as a hobby, passion, and career, and I was blessed as a kid to have access to lights I could build with; I recognize now that not everyone is so lucky. 
                That is why I want to share my passion, my hobby, my life's work with the world, and utilize it to enrich and benefit the lives of others.
                **/}
          </h3>
        </div>

        <div className="col-lg-3">
          <img
            className="thumbnail"
            src={Jackonmtn}
            alt=""
            style={{
              border: "5px",
              borderRadius: "100%",
            }}
          ></img>
          <div
            style={{
              textAlign: "center",
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
        {/*<div className="col-lg-12">
          <h3>
            I have successfully sold this amazing technology for over two
            decades now through LEDPac, and the versatility and uses of LED
            lights still continue to astound me. However, I came to realize that
            I could do so much more; that it is not only those with money and
            resources who deserve this technology, not when it has so much
            potential to benefit the people in ways the rest of us take for
            granted. <br />
            <hr />
            LED and light technology has been here for me as a hobby, passion,
            and career, and I was blessed as a kid to have access to lights I
            could build with; I recognize now that not everyone is so lucky.
            That is why I want to share my passion, my hobby, my life's work
            with the world, and utilize it to enrich and benefit the lives of
            others.
          </h3>
          </div>*/}
        <div className="col-lg-12 quote">
          "The Meaning of Life is to Find Your Gift; the Purpose of Life is to
          Give it Away"
        </div>
      </div>
    </div>
  </section>
)

export default About2
