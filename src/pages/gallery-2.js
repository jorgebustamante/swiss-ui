import React from "react"
import { Link } from "gatsby"
import JapanImages from "../components/japanGallery"
import SEO from "../components/seo"


const GallerytwoPage = () => (
  <>
    <SEO title="Gallery" />
    <JapanImages />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default GallerytwoPage
