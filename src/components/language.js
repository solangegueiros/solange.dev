import * as React from "react"
import { LocalizedLink, useLocalization } from "gatsby-theme-i18n"
import {
  navLinks,
  navLinkItem,
  navLinkText,
} from '../styles/layout.module.css'

import BR from "../images/flags/BR.svg"
import ES from "../images/flags/ES.svg"
import EN from "../images/flags/US.svg"

//Language selection bar

const Language = ({ pageContext }) => {
  const { config } = useLocalization()
  //console.log(pageContext.originalPath)

  return (
    <nav>
      <ul className={navLinks}>
        {config.map(item => (
          <li key={item.code} className={navLinkItem}>
            <LocalizedLink to={pageContext.originalPath} language={item.code} className={navLinkText}>
              {item.localName}
            </LocalizedLink>
          </li>
        ))}          
      </ul>
    </nav>
  )
}

export default Language
