import * as React from "react"
import { useTranslation} from "react-i18next"
import { LocalizedLink, useLocalization } from "gatsby-theme-i18n"
import {
  navLinks,
  navLinkItem,
  navLinkText,
  countryFlag,
  activeLanguage,
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
  console.log("Page Context: ", JSON.stringify(pageContext));
  console.log("config: ", JSON.stringify(config));

  const locale = pageContext.locale;
  const currentLangObj = config.find(lang => lang.code === locale);
  const CurrentLanguage = currentLangObj?.localName || locale.toUpperCase();

  return (
    //{t("language")}: 

    <div>      
      <nav>
        <ul className={navLinks}>
          {config.map(item => {
            const isActive = locale === item.code;

            return (
              <li 
                key={item.code} 
                className={navLinkItem}
              >
                <LocalizedLink to={pageContext.originalPath} 
                  language={item.code}                 
                >
                  <img
                  src={FLAGS[item.code]}
                  alt={item.localName || item.code.toUpperCase()}
                  className={`${countryFlag} ${isActive ? activeLanguage : ""}`}
                />
                </LocalizedLink>    
              </li>
            )
          })} 
        </ul>
      </nav>
    </div>
  )
}


export default Language
