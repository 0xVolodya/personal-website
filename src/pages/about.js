import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutIndex = ({ location }) => {

  return (
    <div>
      <h1>Hi, I'm Vladimir Lebedev</h1>
      <div>I am a full-stack developer</div>

      <button>Get resume</button>
    </div>
  )
}

export default AboutIndex
