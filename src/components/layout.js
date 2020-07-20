import React, { Fragment } from 'react';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "bootstrap/dist/css/bootstrap.min.css";

//import '../css/carrd.css'
//import '../css/newMain.css'
import "./layout.css"

import NavbarGlobal from "./navbar"
import SEO from './seoNew'
//import Sticky from 'react-stickynode';





const Layout = ({ children }) => (
    <Fragment>
      <Header />
      <SEO />
      <NavbarGlobal />
      <div id="wrapper">
        <div id="main">
      {children}
      </div>
      </div>
      <Footer />
    </Fragment>
  )

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

