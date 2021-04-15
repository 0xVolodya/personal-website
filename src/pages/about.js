import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import WorkExperience from "../components/WorkExperience"
import SEO from "../components/seo"
import styled from "styled-components"

const WorkContainer = styled.div`
  width: 80%;
  margin: auto;
  padding: 0;
`

const AboutIndex = ({ location }) => {
  return (
    <div>
      <WorkContainer>
        <WorkExperience/>
      </WorkContainer>
    </div>
  )
}

export default AboutIndex
