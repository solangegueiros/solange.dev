import * as React from 'react'
import { MdxLink, LocalizedLink as Link, useLocalization } from "gatsby-theme-i18n"
import Language from "../components/language"
import { useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,  
} from '../styles/layout.module.css'

const components = {
  a: MdxLink,
}

const Layout = ({ pageTitle, children, pageContext }) => {
/*
  const { locale } = useLocalization()

          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/locales" className={navLinkText}>
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
      <nav>
        <ul className={navLinks}>
        <li className={navLinkItem}>
            <Link to="/events" className={navLinkText}>
              Events
            </Link>
          </li>
          <li className={navLinkItem}>
            <a target="_blank" rel="noopener noreferrer" href="https://ethereum.solange.dev/" className={navLinkText}>
              Ethereum
            </a>
          </li>
          <li className={navLinkItem}>
            <a target="_blank" rel="noopener noreferrer" href="https://rsk.solange.dev/" className={navLinkText}>
              RSK
            </a>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Language pageContext={pageContext}/>

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

