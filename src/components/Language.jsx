import * as React from "react"
import { useTranslation} from "react-i18next"
import { LocalizedLink, useLocalization } from "gatsby-theme-i18n"
import {
  navLinks,
  navLinkItem,
  navLinkText,
  countryFlag,
} from '../styles/layout.module.css'

const FLAGS = {
  en: "/images/flags/EN.png",
  es: "/images/flags/ES.png",
  pt: "/images/flags/BR.png",
};


//Language selection bar

const Language = ({ pageContext }) => {
  const { t } = useTranslation()
  const { config } = useLocalization()
  //console.log(pageContext.originalPath)

  return (
    //{t("language")}: 

    <div>      
      <nav>
        <ul className={navLinks}>
          {config.map(item => (
            <li key={item.code} className={navLinkItem}>
              <LocalizedLink to={pageContext.originalPath} 
                language={item.code}                 
              >
                <img
                  src={FLAGS[item.code]}
                  alt={item.localName || item.code.toUpperCase()}
                  className={countryFlag}
                />
              </LocalizedLink>    
            </li>
          ))}          
        </ul>
      </nav>
    </div>
  )
}


export default Language
