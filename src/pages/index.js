import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import SEO from "../components/seo"
import WorkExperience from "../components/WorkExperience"
import Introduction from "../components/Introduction"
import Divider from "../components/utils-components/divider"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`

const BlogIndex = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes

  return (
    <div>
      <SEO title="Main page" />
      <Wrapper>
        <Introduction />
      </Wrapper>
      <Divider />
      <Wrapper>
        <WorkExperience />
      </Wrapper>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
export default BlogIndex
