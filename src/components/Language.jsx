import * as React from "react"
import { useTranslation} from "react-i18next"
import { LocalizedLink, useLocalization } from "gatsby-theme-i18n"
import {
  navLinks,
  navLinkItem,
  navLinkText,
  countryFlag,
} from '../styles/layout.module.css'
import { ReactComponent as BR } from "../images/flags/BR.svg"
import { ReactComponent as ES } from "../images/flags/ES.svg"
import { ReactComponent as EN } from "../images/flags/US.svg"

const FLAGS = {
  en: <EN className={countryFlag} />,
  es: <ES className={countryFlag} />,
  pt: <BR className={countryFlag} />,
};


//Language selection bar

const Language = ({ pageContext }) => {
  const { t } = useTranslation()
  const { config } = useLocalization()
  //console.log(pageContext.originalPath)

  //{item.localName}
  return (
    <div>
      {t("language")}:      
      <nav>
        <ul className={navLinks}>
          {config.map(item => (
            <li key={item.code} className={navLinkItem}>
              <LocalizedLink to={pageContext.originalPath} 
                language={item.code}                 
              >
                {FLAGS[item.code]}
              </LocalizedLink>    
            </li>
          ))}          
        </ul>
      </nav>
    </div>    
  )
}
//

export default Language
