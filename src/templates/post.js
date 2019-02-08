import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'


const PostTemplate = ({data: {wordpressPost}}) => {
    
        const post = wordpressPost
        console.log(post)

        return (
            <Layout>
                <div className="post">

                  <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

                  <p className="post-date" dangerouslySetInnerHTML={{ __html: post.date }} />

                  <div dangerouslySetInnerHTML={{ __html: post.content }} />

                </div>
            </Layout>
        )
    
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
            date(formatString: "MMMM DD, YYYY")
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
        site {
            siteMetadata {
                title
            }
        }
    }
`