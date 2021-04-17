import * as React from "react"
import { Link, graphql } from "gatsby"

import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import './style.css'

const WorkPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const { previous, next } = data
  const image = getImage(post.frontmatter.logo)

  return (
    <div className="global-wrapper">
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <div className="post-job-image"><GatsbyImage image={image} alt="new" /></div>
          <h2 itemProp="headline">{post.frontmatter.title}</h2>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/job${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/job${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default WorkPostTemplate

export const pageQuery = graphql`
  query BlogWorkBySlug(
    $id: String!
    $previousJobId: String
    $nextJobId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        logo {
          childImageSharp {
            gatsbyImageData(
              width: 100
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousJobId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextJobId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
