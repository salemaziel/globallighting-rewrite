import React from "react"
import Layout from "../components/layout"
import Thankspage from "../components/PageComponents/Thanks/thankspage"
import Container from "react-bootstrap/Container"

import '../components/layout.css'

const Thanks = () => (
    <div>
        <Layout>
                
            <Container>
                <Thankspage />
                
            </Container>
                
        </Layout>
    </div>
)

export default Thanks
