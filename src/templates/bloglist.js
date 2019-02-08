import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { Link } from "gatsby"

const BlogListTemplate = ({data: {allWordpressPost: {edges}}}) => {

    console.log(edges)

    return (
      <Layout>
        <div className="page blog-list">

          {edges.map(({ node }) => (
            <div className="blog-list-post">
              <h4>{node.title.replace(/#038;/g, "")}</h4>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <Link to={node.slug}>Read More</Link>
            </div>
          ))}
          
        </div>
      </Layout>
    )
  
}

export default BlogListTemplate

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`