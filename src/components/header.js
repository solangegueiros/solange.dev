import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from './SEO'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = () => {
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
    <>
      <SEO title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />

      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
        </Link>        
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home - inicio</ListLink>
        </ul>
      </header>
    </>
  )
} 

/*
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/talks/">Talks</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
*/


Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
