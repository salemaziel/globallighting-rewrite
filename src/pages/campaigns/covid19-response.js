import React from "react"

import Layout from "../../components/layout"
import CampaignsPage from "../../components/PageComponents/Campaigns/CampaignsPage"

import { Helmet } from "react-helmet"

const Covid19 = () => (
  <Layout>
    <Helmet title={"Covid19 Response"} />

    <CampaignsPage />
  </Layout>
)

export default Covid19
