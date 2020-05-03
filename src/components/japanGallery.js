import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./style.css"
const JapanImages = () => {
  // Edit image optimization params in query
  // fluid(maxWidth: 300, quality: 100) {
  const { allFile } = useStaticQuery(graphql`
    query JapanSheet{
       allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          sourceInstanceName: { eq: "galleries" }
          relativeDirectory: {eq: "japan-folder"}        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 600) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <section className="gallery-grid">
        {allFile.edges.map((items, i) => (
          <div className="imgContainer">
          <p className="contactText">KODACHROME {i + 1}</p>
          <Img key={i} fluid={items.node.childImageSharp.fluid} />
        </div>
          
        ))}
      </section>
      <section className="equal-row bg-yellow">
        <div className="link">
          {" "}
          <AniLink className="geometric" paintDrip to="/" hex="#6271D4">
            Go back to home{" "}
          </AniLink>
        </div>
      </section>
    </div>
  )
}

export default JapanImages
