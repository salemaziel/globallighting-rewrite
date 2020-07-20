import React from "react"

import AboutUs from './AboutUs'
import ActionComponent from './ActionComponent'
import WhatWeDo from './WhatWeDo'
//import NewFromBlog from './NewFromBlog'
import Synergy from "./Synergy"
import Homeheadertitle from "./Homeheadertitle"
import Homehero from "./homehero"

const HomePage = () => (
  <>
      <Homehero />
      <Homeheadertitle />
      <AboutUs />
      <Synergy />
      <WhatWeDo /> 
     {/* <NewFromBlog />*/}
      <ActionComponent />
    {/**<OurWork />**/}
  </>
)

export default HomePage
