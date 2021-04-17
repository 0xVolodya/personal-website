import * as React from "react"

import WorkExperience from "../components/WorkExperience"
import styled from "styled-components"

const WorkContainer = styled.div`
  width: 80%;
  margin: auto;
  padding: 0;
`

const AboutIndex = () => (
  <div>
    <WorkContainer>
      <WorkExperience />
    </WorkContainer>
  </div>
)

export default AboutIndex
