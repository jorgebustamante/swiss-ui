import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Content = () => {
  const data = useStaticQuery(graphql`
    query {
      mountainImg: file(relativePath: { eq: "mountain.JPG" }) {
        childImageSharp {
          fluid(
            maxWidth: 960
            quality: 100
            duotone: { highlight: "#f00e2e", shadow: "#192550" }
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wagonImg: file(relativePath: { eq: "wagon.JPG" }) {
        childImageSharp {
          fluid(
            maxWidth: 960
            quality: 100
            duotone: { highlight: "#f00e2e", shadow: "#192550" }
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <section className="CLrow bg-yellow">
        <div className="one-third bg-yellow">
          <p className="content-text">
            35MM.
          </p>
        </div>
        <div className="two-third ">
          <Img
            fluid={data.mountainImg.childImageSharp.fluid}
            alt="cloudy mountain view"
          />
        </div>
      </section>
      <section className="CRrow bg-yellow">
        <div className="two-third">
          <Img
            fluid={data.wagonImg.childImageSharp.fluid}
            alt="bull pulling wagon in japan"
          />
        </div>
        <div className="one-third bg-yellow">
          <p className="content-text">
           1935.
          </p>
        </div>
      </section>
      <section className="equal-row bg-yellow">
        {[
          {name: "America", path: '/america-gallery'},
          {name: "Japan", path: '/japan-gallery'},
          {name: "Infrared", path: '/infrared-gallery'}

      ].map(({name, path}) => (
        <div className="link bg-yellow">
          {" "}
          <AniLink className="geometric" paintDrip to={path} hex="#6271D4">
            <span className='link-text'>Go to {name} Gallery</span>
          </AniLink>
        </div>
      ))}
     
      </section>
    </>
  )
}
export default Content
