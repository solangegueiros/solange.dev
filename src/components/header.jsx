import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"

import styles from "../styles/header.module.scss"
import BR from "../images/flags/BR.svg"
import ES from "../images/flags/ES.svg"
import EN from "../images/flags/US.svg"

const Header = ({ pageContext }) => {
  const intl = useIntl()
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
  //const { title, description } = data.site.siteMetadata  
  const { title } = data.site.siteMetadata  

/*
<header
  style={{
    padding: `1.5rem`,
    background: `#FFD700`,
    marginBottom: `1.45rem`,
  }}
>
<ul style={{ listStyle: `none`, float: `right` }}>      
*/  
  return (
    <>
      <header className={styles.header}>
        <LocalizedLink to="/">
          {title}
        </LocalizedLink>
        {` | `}
        <LocalizedLink to="/events/">
          {intl.formatMessage({ id: "events" })}
        </LocalizedLink>
        {` | `}
        <LocalizedLink to="/blog/">
          {intl.formatMessage({ id: "blog" })}
        </LocalizedLink>
        {` | `}
        <a target="_blank" rel="noopener noreferrer" href="https://ethereum.solange.dev/">
          Ethereum
        </a>
        {` | `}
        <a target="_blank" rel="noopener noreferrer" href="https://rsk.solange.dev/">
          RSK
        </a>
        {` | `}
        <LocalizedLink to="/about/"> 
          {intl.formatMessage({ id: "about" })} 
        </LocalizedLink>


        <ul className={styles.headerMenu}>
          <LocalizedLink to={pageContext.originalPath}  language="en">
            <EN className="CountryFlag" />
          </LocalizedLink>
          
          <LocalizedLink to={pageContext.originalPath} language="es">
            <ES className="CountryFlag" />
          </LocalizedLink>

          <LocalizedLink to={pageContext.originalPath} language="pt">
            <BR className="CountryFlag" />
          </LocalizedLink>          
        </ul>
      </header>
    </>
  )
}

export default Header

/*
        <LocalizedLink to="/">
          {intl.formatMessage({ id: "home" })}
        </LocalizedLink>
*/  
