import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
//import "bootstrap/dist/js/bootstrap"
import { GatsbyProvider } from "../context/context"

import $ from "jquery"
import "../components/layout.css"
import "../css/classy-nav.min.css"

var searchwrapper = $(".search-wrapper")
$(".search-btn").on("click", function () {
  searchwrapper.toggleClass("on")
})
$(".close-btn").on("click", function () {
  searchwrapper.removeClass("on")
})
// :: 3.0 Nav Active Code
if ($.fn.classyNav) {
  $("#deliciousNav").classyNav()
}

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
