import React from "react"
import ActionComponent from "../Home/ActionComponent"
import CampaignSection1 from "./needed/sectionOne"
import QuickFacts from "./needed/sectionQuickFacts"
import WhyLEDs from "./needed/sectionWhyLEDs"
import OurSolution from "./needed/sectionOurSolution"
import Citations from "./needed/citations"
import CampaignHero from "./needed/sectionHero"

const CampaignsPage = () => (
  <>
    <CampaignHero />
    <CampaignSection1 />
    <QuickFacts />
    <WhyLEDs />
    <OurSolution />
    <Citations />
    <ActionComponent />
  </>
)

export default CampaignsPage
