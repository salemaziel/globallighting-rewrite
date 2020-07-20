import React from 'react'

//import '../css/footer.css'
import footerStyle from './footer.module.css'

const Footer = () => (
        
       <footer className={footerStyle.Foot}>
           {/**<hr id="divider02" />**/}
            <p id="text05" className={footerStyle.Certified}>
                <em>Global Lighting Project is a certified 501(c)3 Non-Profit Organization</em>
            </p>
            <p id="text03" className={footerStyle.Copyright}>© Global Lighting Project. All rights reserved.</p>


        


        {/**<div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="cx_box_one">
                        <a href="#"><img alt="footer-" src={FooterLogo} className="img-fluid" /></a>
                        <h2>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    </h2>
                        <p>FOLLOW US</p>
                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cx_box_two">
                       
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="cx_box_two">
                        <h2>Userful & Helpful Links</h2>
                        
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cx_box_three">
                        <h2>Contact Detail</h2>
                        <p>
                            Global Lighting Project.<br />
                            San Diego, CA
                    </p>
                        <ul>
                            <li><a href="tel:001 760 489 8067"><img alt="footer-" src={CallLogo} className="img-fluid" /> +1 760 489 8067</a></li>
                            <li><a href="mailto:jack@globallightingproject.com"><img alt="footer-" src={EnvelopLogo} className="img-fluid" /> <span>jack@globallightingproject.com</span></a></li>
                        </ul>
                        <a href="#" className="involve">
                            Donate
                            <span style={{
                                position: 'absolute',
                                right: '15px',
                                lineHeight: '50px'
                            }}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12"><p className="copy-right">All rights reserved copyright 2019 </p></div>
                        </div>**/}
                        </footer>
        

)

export default Footer
