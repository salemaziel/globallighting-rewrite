import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

import WorkOne from '../../images/work-one.jpg'
import WorkTwo from '../../images/work-two.jpg'
import WorkThree from '../../images/work-three.jpg'

import '../../css/HomePageCss/ourWork.css'

class OurWork extends React.Component {
    state = {
        isOpen: false,
        link: ''
    }
    toggle = (link) => {
        this.setState({
            isOpen: !this.state.isOpen,
            link: link.length > 0 ? link : ''
        })
    }
    render() {
        return (
            <section className="section-seven">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>
                                Our Work
                        </h2>
                            <h3>
                                Our Work
                        </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 testmonial_video" onClick={() => this.toggle("https://www.youtube.com/watch?time_continue=1&v=xQOIPN8vbeA")}>
                            <img alt="work-one" src={WorkOne} className="img-fluid" />
                        </div>

                        <div className="col-sm-4 testmonial_video" onClick={() => this.toggle("https://www.youtube.com/")}>
                            <img alt="work-one" src={WorkTwo} className="img-fluid" />
                        </div>

                        <div className="col-sm-4 testmonial_video" onClick={() => this.toggle("https://www.youtube.com/")}>
                            <img alt="work-one" src={WorkThree} className="img-fluid" />
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle} size="lg" centered={true}>
                    <ModalHeader toggle={this.toggle}>Demo Video</ModalHeader>
                    <ModalBody style={{padding: 0,}}>
                        <iframe
                            id="cartoonVideo"
                            width="100%"
                            src={this.state.link}
                            frameborder="0"
                            allowfullscreen
                            style={{marginBottom: 0}}
                            title="video"
                        >
                        </iframe>
                    </ModalBody>
                </Modal>
            </section>
        )
    }
}

export default OurWork
