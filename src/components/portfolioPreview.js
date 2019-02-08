import React from "react"
import Layout from "./layout"
import { Link } from "gatsby"


const PortfolioPreview = ({data: {allWordpressPost: {edges}}}) => {

      const blogPosts = edges.filter(x => x.node.tags[0].name === "portfolio" && x.node.featured_media !== null && x.node.featured_media.localFile !== null)
      console.log(edges)
      console.log(blogPosts)

        return (
          <>
                <h1>projects</h1>
                <div id="projects" className="portfolio">
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
          </>
        )
}

export default PortfolioPreview