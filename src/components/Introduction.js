import * as React from "react"
import styled from "styled-components"
import Button from "../components/utils-components/resume-button"

const Wrapper = styled.div``

const goToLink = () => {
  window.open(
    "https://drive.google.com/file/d/18Y86GMF-ncF52Fax-LdZDb7PHrkEgAkM/view?usp=sharing",
    "_blank" // <- This is what makes it open in a new window.
  )
}

const Introduction = () => (
  <Wrapper>
    <h1>Hi, I'm Vladimir Lebedev</h1>
    <div>I am a full-stack developer</div>

    <Button
      onClick={()=>goToLink()}
      type="button"
    >
      Get resume
    </Button>
  </Wrapper>
)

export default Introduction
