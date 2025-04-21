import * as React from "react"
import { useTranslation} from "react-i18next"
import { LocalizedLink, useLocalization } from "gatsby-theme-i18n"
import {
  navLinks,
  navLinkItem,
  navLinkText,
  countryFlag,
} from '../styles/layout.module.css'

import BR from "../images/flags/BR.svg"
import ES from "../images/flags/ES.svg"
import EN from "../images/flags/US.svg"

const FLAGS = {
  en: <EN className="CountryFlag"/>,
  es: <ES className="CountryFlag"/>,
  pt: <BR className="CountryFlag"/>,
};


//Language selection bar

const Language = ({ pageContext }) => {
  const { t } = useTranslation()
  const { config } = useLocalization()
  //console.log(pageContext.originalPath)

  return (
    <p>
      {t("language")}: 
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
    </p>
  )
}
//

export default Language
