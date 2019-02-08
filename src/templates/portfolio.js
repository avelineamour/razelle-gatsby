import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { Link } from "gatsby"

const PortfolioTemplate = ({data: {allWordpressPost: {edges}}}) => {
      
      const blogPosts = edges.filter(x => x.node.tags[0].name === "portfolio" && x.node.featured_media !== null && x.node.featured_media.localFile !== null)
      console.log(edges)
      console.log(blogPosts)

        return (
            <Layout>
                <div className="portfolio">

                  {blogPosts.map(({node}) => {
                    //ampersand results in weird characters, remove them
                    let title = node.title.replace(/#038;/g, "")
                    let slug = node.slug

                    return <Link to={slug} key={title}>
                    <div 
                    data-title={title} 
                    className="portfolio-image-wrapper">
                      <img 
                      alt="portfolio-pic" 
                      src={node.featured_media.localFile.childImageSharp.sizes.originalImg}/>
                    </div>
                    </Link>
                  })}

                </div>
            </Layout>
        )
}

export default PortfolioTemplate

export const pageQuery = graphql`
    query blogPostAll {
      allWordpressPost(sort: {fields: [date], order: DESC}) {
        edges {
          node {
            id
            title
            slug
            tags {
              name
              }
            featured_media {
              localFile {
                childImageSharp {
                  sizes {
                    originalImg
                  }
                }
              }
            }
          }
        }
      }
    }
`