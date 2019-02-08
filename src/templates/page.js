import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'

const PageTemplate = ({data: {wordpressPage}}) => {
   
        const currentPage = wordpressPage
        console.log(currentPage)

        return (
            <Layout>
                <div className={currentPage.slug + " page"}>
                    <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>
                </div>
            </Layout>
        )
   
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            date(formatString: "MMMM DD, YYYY")
        }
        site {
            id
        }
    }
`