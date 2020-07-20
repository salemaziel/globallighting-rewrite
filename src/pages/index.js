import React from "react"
import Layout from "../components/layout"
import HomePage from '../components/PageComponents/Home/HomePage'
import { Helmet } from 'react-helmet'

const IndexPage = () => (
  <Layout>
    <Helmet title={'Home'} />
      <HomePage />
  </Layout>
)

export default IndexPage
