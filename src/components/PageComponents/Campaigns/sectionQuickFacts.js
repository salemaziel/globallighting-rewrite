import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from "../button"
import LEDversus from "../../images/ledvsothers.png"

import CampaignGallery2 from "./campaignGallery2"

const QuickFacts = () => (
  <section>
    <Container className="sectionTwoBg">
      <Row className="sectionTwoRow">
        <Col className="colCampaignGallery">
          <CampaignGallery2 />
        </Col>
        <Col className="colCampaignGallery">
          {/*} <h2 style={{textAlign: 'center'}}>UV-C Light as a Disinfectant</h2>*/}
          <h2 style={{ textAlign: "center" }}>Quick Facts </h2>
          <ul className="quickfacts">
            <br />
            <li>
              COVID-19 infections can be caused by contact with contaminated
              surfaces followed by touching of facial areas and has been
              found able to live on plastic and steel surfaces <strong>for up to 3 days. </strong>
              [1,2]
            </li>
            <br />
            <li>
              UV-C light has been used <strong>for over 40 years </strong> to disinfect drinking
              water, waste water, air, pharmaceutical products, and surfaces
              against a wide range of human pathogens. To date, hundreds of
              various bacteria and viruses tested have been shown to be
              responsive to UV disinfection at various doses. [3]
            </li>
            <br />
            <li>
              UV-C light in the range of 200-280nm has been <strong>shown to inactivate
              SARS-CoV-1 and MERS-CoV,</strong> two other coronaviruses that are
              near-relatives of the CoVid-19 coronavirus we face today.[2,3]
            </li>
            <br />
           {/* <li>
              LED lights offer a quick and highly energy efficient method of
              delivering ultraviolet rays compared to traditional mercury UV
              lamps. In addition, they turn on instantaneously, contain no
              mercury, and require only{" "}
              <strong>
                5-10% of the energy required by traditional UV lamps.{" "}
              </strong>
           </li>*/}
          </ul>
        </Col>
      </Row>
    </Container>
  </section>
)

export default QuickFacts

/*
1. “New coronavirus stable for hours on surfaces”; CDC (extracted from N van Doremalen, et al. Aerosol and surface stability of HCoV-19 (SARS-CoV-2) compared to SARS-CoV-1. The New England Journal of Medicine. DOI: 10.1056/NEJMc2004973 (2020) (https://www.nih.gov/news-events/news-releases/new-coronavirus-stable-hours-surfaces).

2. "Inactivation of the coronavirus that induces severe acute respiratory syndrome, SARS-CoV" M.E.R. Darnell, K. Subbarao, S.M. Feinstone, D.R. Taylor. J Virol Methods, 121 (2004), pp. 85-91, doi: 10.1016/j.jviromet.2004.06.006 

3. “Efficacy of an Automated Multiple Emitter Whole-Room Ultraviolet-C Disinfection System Against Coronaviruses MHV and MERS-CoV,” Bedell K et al. ICHE 2016 May;37(5):598-9. doi:10.1017/ice.2015.348. Epub 2016 Jan 28.


1. “Miscellaneous Inactivating Agents - Guideline for Disinfection and Sterilization in Healthcare Facilities (2008);” Centers for Disease Control and Prevention, National Center for Emerging and Zoonotic Infectious Diseases (NCEZID), Division of Healthcare Quality Promotion (DHQP) (https://www.cdc.gov/infectioncontrol/guidelines/disinfection/disinfection-methods/miscellaneous.html)

2.  “Large-scale preparation of UV-inactivated SARS coronavirus virions for vaccine antigen,” Tsunetsugu-Yokota Y et al. Methods Mol Biol. 2008;454:119-26. doi: 10.1007/978-1-59745-181-9_11.

"UV LED Disinfection 101" Beck, Sara. (2018). UV LED Disinfection 101. 20. 4-9. https://www.researchgate.net/publication/327574354_UV_LED_Disinfection_101
 



            <li>UV-C disinfection is to be used in a “multibarrier approach” alongside other technologies as well as regular filtering or cleaning in order to ensure that any pathogen not “killed” by one method will be inactivated by another. </li>
            <br />

*/
