import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author            
          }
        }
      }
    `
  )

  return (
    <>
      <footer style={{ padding: `0.5rem 0`, margin: `1rem auto`,  background: `#FFD700` }}>
        <p style={{ textAlign: `center`, margin: `1rem auto` }}>
          © 2017 - {new Date().getFullYear()}, {data.site.siteMetadata.author}
        </p>
      </footer>
    </>
  )
} 


export default Footer
