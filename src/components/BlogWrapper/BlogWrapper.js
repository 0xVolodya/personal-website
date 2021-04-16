import * as React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"

const Wrapper = styled.section`
  display: block;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
`

const BlogWrapper = props => {
  // console.log(props)
  return (
    <Wrapper>
      <Center>{props.children}</Center>
    </Wrapper>
  )
}
export default BlogWrapper
