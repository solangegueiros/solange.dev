import * as React from 'react'
import { MdxLink, LocalizedLink as Link, useLocalization } from "gatsby-theme-i18n"
import Menu from "../components/Menu"
import Language from "../components/language"
import { useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navWrapper,
  siteTitle,  
  logoLink,
  logoIcon,
} from '../styles/layout.module.css'
import icon from '../images/icon.png'

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
        <Link to="/" className={logoLink}>
          <img src={icon} alt="Site icon" className={logoIcon} />
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

