
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./style.css"
const JapanImages = () => {
  // Edit image optimization params in query
  // fluid(maxWidth: 300, quality: 100) {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          sourceInstanceName: { eq: "japanFolder" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
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
          <Img key={i} fluid={items.node.childImageSharp.fluid} />
        ))}
      </section>
    </div>
  )
}

export default JapanImages
