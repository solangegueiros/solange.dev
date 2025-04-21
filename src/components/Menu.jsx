import * as React from 'react'
import { MdxLink, LocalizedLink as Link, useLocalization } from "gatsby-theme-i18n"
import { useTranslation} from "react-i18next"
import { useStaticQuery, graphql } from 'gatsby'
import {
  heading,
  siteTitle,
  headerMenu,  
} from '../styles/layout.module.css'

const components = {
  a: MdxLink,
}


const Menu = ({ pageTitle, children, pageContext }) => {
  const { t } = useTranslation()

  return (
    <nav>
      <ul className={headerMenu}>
      <li className={headerMenu}>
        <Link to="/events" className={headerMenu}>
          {t("events")}
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
          {t("about")}
        </Link>
      </li>
    </ul>
  </nav>


  )
}

export default Menu