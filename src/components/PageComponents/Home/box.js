import React from "react"
//import "../css/box.css"

import CardDeck from "react-bootstrap/CardDeck"

import Modalsky1 from "../../modals/modalsky1"
import Modalsky2 from "../../modals/modalsky2"
import Modalsky3 from "../../modals/modalsky3"

import homeStyle from './home.module.css'
//const Box = () => (

//class Box extends React.Component {
//  constructor(props) {
//    super(props)
//  }
//
//  render() {
//    return (

const Box = () => (
	<CardDeck>
        <div className={homeStyle.innerDeck}>
          <div className={homeStyle.thumbnails}>
            <div className={homeStyle.box}>
              <Modalsky1 />
            </div>

            <div className={homeStyle.box}>
              <Modalsky2 />
            </div>

            <div className={homeStyle.box}>
              <Modalsky3 />
            </div>
          </div>
        </div>
      </CardDeck>
    )

export default Box
