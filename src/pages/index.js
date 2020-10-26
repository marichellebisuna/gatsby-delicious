import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { GatsbyProvider } from "../context/context"

const IndexPage = () => {
  return (
    <>
      <GatsbyProvider>
        <Layout>
          <SEO title="Home" />

          <h1>body</h1>
        </Layout>
      </GatsbyProvider>
    </>
  )
}

export default IndexPage
