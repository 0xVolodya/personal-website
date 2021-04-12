import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const HomeiIndex = ({ location }) => {

  return (
    <div>
      <SEO title="About" />
      <Bio />
    </div>
  )
}

export default HomeiIndex
