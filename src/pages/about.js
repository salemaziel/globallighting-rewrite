import React from "react";
import Layout from "../components/layout";
import { Helmet } from 'react-helmet';


import AboutPage from '../components/PageComponents/About/AboutPage'


const About = () => (
     <Layout>
          
        <Helmet title={'About Page'} />
        <AboutPage />
     </Layout>
   )
   
   export default About