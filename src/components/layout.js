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
        <nav>
          <ul className={headerMenu}>
          <li className={headerMenu}>
              <Link to="/events" className={headerMenu}>
                Events
              </Link>
            </li>
            <li className={headerMenu}>
              <a target="_blank" rel="noopener noreferrer" href="https://ethereum.solange.dev/" className={headerMenu}>
                Ethereum
              </a>
            </li>
            <li className={headerMenu}>
              <a target="_blank" rel="noopener noreferrer" href="https://academy.rsk.dev.br/" className={headerMenu}>
                RSK Academy
              </a>
            </li>
            <li className={headerMenu}>
              <a target="_blank" rel="noopener noreferrer" href="https://rsk.solange.dev/" className={headerMenu}>
                RSK
              </a>
            </li>
            <li className={headerMenu}>
              <Link to="/about" className={headerMenu}>
                About
              </Link>
            </li>
          </ul>
        </nav>
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

