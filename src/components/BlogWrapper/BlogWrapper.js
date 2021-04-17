import * as React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  display: block;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
`

const BlogWrapper = props => {
  return (
    <Wrapper>
      <Center>{props.children}</Center>
    </Wrapper>
  )
}
export default BlogWrapper
