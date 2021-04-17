import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Navbar from "./navbar"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Helmet>
      <script src={withPrefix('script.js')} type="text/javascript" />
    </Helmet>
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
