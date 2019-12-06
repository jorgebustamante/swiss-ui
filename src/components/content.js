import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Content = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      mountainImg: file(relativePath: { eq: "mountain.JPG" }) {
        childImageSharp {
          fluid(
            maxWidth: 1400
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
            maxWidth: 1400
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
      <div>
        <section className="CLrow bg-yellow">
          <div className="one-third bg-yellow">
            <p className="content-text">
              Kodachrome was the first consumer accessible 35mm film stock,
              commercially released in 1935 consumers were empowerd with color
              photo film for the first time. With a complicated and costly
              development process-- the proto boomers at Eastman kodak developed
              new methods of color photography. Today the development chemicals
              for Kodachrome stock are out of production and chemically expired,
              all existing unshot kodachrome film is unusable and all developed
              kodachrome slides are rapidly deteriorating.
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
              In 2016 I became a <span className='strike'>hoarder</span> hobbyist of archiving
              existing kodachrome slides collected from estate sales, garage
              sales, and antique stores. On this site I will be showing 2 mid century slide collections, one from japan and one from america.
            </p>
          </div>
        </section>
        <section className="gallery-grid bg-yellow">
          <div className='link'>
            {" "}
            <Link to="/gallery" className="">
            <span className='geometric'>Go to American Gallery</span>
            </Link>
          </div>
          <div className='link bg-yellow'>
            {" "}
            <Link to="/gallery-2" className="">
              <span className='geometric'>Go to Japan Gallery</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
export default Content
