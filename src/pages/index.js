import React from "react"
import { Link } from "gatsby"
import PortfolioPreview from '../components/portfolioPreview'
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../images/laptop.png"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `portfolio`, `front end developer`, `front end development`]} />
    <section className="laptop">
      <img src={Image}></img>
    </section >

    <section className="about">
      <h1>about</h1>
      <p>Front End Developer. Seeking an opportunity to grow with a team that impacts the world through elegant and inspiring design<br></br>♡</p>
    </section>

    <section className="projects">
    <StaticQuery
      query={graphql`
      query portfolioPreview {
        allWordpressPost(filter: {slug: {in: ["vote-2018-react-redux", "luxe-boutique", "shopify"]}} sort: {fields: [date], order: DESC}) {
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
    `}
      render={data => (<PortfolioPreview data={data}></PortfolioPreview>)}
    />
    </section>

    <section className="education">
      <h1>education</h1>
      <div className="education-wrapper">
        <div className="img-wrapper">
        <img id="flatiron" src="https://i2.wp.com/cdn.dribbble.com/users/8894/screenshots/3370036/flatiron-school_gif.gif?zoom=2&amp;ssl=1" src-orig="https://i2.wp.com/cdn.dribbble.com/users/8894/screenshots/3370036/flatiron-school_gif.gif?ssl=1" scale="0"></img>
        <h1>flatiron school</h1>
        </div>

        <div className="img-wrapper">
        <img id="codecademy" src="https://avatars2.githubusercontent.com/u/1463944?s=280&amp;v=4" scale="0"></img>
        <h1>codecademy</h1>
        </div>

        <div className="img-wrapper">
        <img id="superhi" src="https://pbs.twimg.com/profile_images/905919354423955456/679dywzk_400x400.jpg" scale="0"></img>
        <h1>superhi</h1>
        </div>

      </div>
    </section>
  </Layout>
)

export default IndexPage
