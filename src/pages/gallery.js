import React from "react"
import { Link } from "gatsby"
import AmericaImages from "../components/americaGallery"
import SEO from "../components/seo"


const GalleryPage = () => (
  <>
    <SEO title="Gallery" />
    <AmericaImages />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default GalleryPage
