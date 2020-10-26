import React, { useContext } from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import Sidebar from "./Navbar/Sidebar"
import "./layout.css"
import { GatsbyContext } from "../context/context"

const Layout = ({ children }) => {
  const { isSidebarOpen } = useContext(GatsbyContext)

  return (
    <>
      <Navbar />

      {isSidebarOpen && <Sidebar />}

      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
