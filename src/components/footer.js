import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              name
              twitter
            }            
          }
        }
      }
    `
  )
  return (
    <>
      <footer style={{ padding: `0.5rem 0`, margin: `1rem auto`,  background: `#FFD700` }}>
        <p style={{ textAlign: `center`, margin: `1rem auto` }}>
          © {new Date().getFullYear()}, {data.site.siteMetadata.author.name}
        </p>
      </footer>
    </>
  )
} 


export default Footer
