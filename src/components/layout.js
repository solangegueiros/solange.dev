import * as React from 'react'
import { MdxLink, LocalizedLink as Link, useLocalization } from "gatsby-theme-i18n"
import Menu from "../components/Menu"
import Language from "../components/Language"
import { useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  navWrapper,
  headerMenu,   
} from '../styles/layout.module.css'

const components = {
  a: MdxLink,
}

const Layout = ({ pageTitle, children, pageContext }) => {
/*
  const { locale } = useLocalization()

          <li className={headerMenu}>
            <Link to="/blog">
              Blog
            </Link>
          </li>
          <li className={headerMenu}>
            <Link to="/locales">
              Locales info {locale}
            </Link>
          </li>
*/  

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  //console.log("Layout \n", data);

  return (
    <div >
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>
        <Link to="/">
          {data.site.siteMetadata.title}
        </Link>        
      </header>

      <div className={navWrapper}>
        <Menu pageContext={pageContext}/>
        <Language pageContext={pageContext}/>
      </div>  

      <main>
        <div className={container}>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout

