// src/components/LanguageSwitcher.js
import React from 'react'
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import { useStaticQuery, graphql } from 'gatsby'

const FLAGS = {
  en: "/images/flags/EN.png",
  es: "/images/flags/ES.png",
  pt: "/images/flags/BR.png",
};

const LanguageSwitcher = () => {
  const { languages, changeLanguage, language } = useI18next()
  const { t } = useTranslation()
  //console.log("\n  languages", JSON.stringify(languages, null, 2));
  //console.log("\n  language", language);

  //      <h3 className="language-title">{t('language')} : {language}</h3>

  return (
    <div className="language-switcher">
      <div className="language-buttons">
        {languages.map(lang => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`language-button ${lang === language ? 'language-button--active' : ''}`}
          >
            <img
              src={FLAGS[lang]}
              alt={lang}
              className="language-flag"
              title={lang.toUpperCase()}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSwitcher
