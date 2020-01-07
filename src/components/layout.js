import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import SEO from './SEO'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return (    
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <SEO title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
        </Link>        
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
          <ListLink to="/talks/">Talks</ListLink>
        </ul>
      </header>
      {children}
      <footer>
        © {new Date().getFullYear()}, Solange Gueiros
      </footer>      
    </div>
  )
}