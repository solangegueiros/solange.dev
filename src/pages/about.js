import * as React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import Layout from '../components/Layout'
import { SEO }  from "../components/Seo"

const PageTitle = "About Me"

const AboutPage = ({ location }) => {
  const { t } = useTranslation()
  const PageLocalized = t('aboutPage.title')

  return (
    <Layout pageTitle={PageLocalized} location={location}>
      <p>{t('aboutPage.description')}</p>

      <h2>
        <b>Sol - Solange Gueiros</b>        
      </h2>
      <br/>      
      <StaticImage width={200}
        alt="Solange Gueiros"
        src="../images/SolangeGueiros-2021-12-Rosto.jpg"
      />
      <h3>Mini bio</h3>
      <p>
        <b>{t("aboutPage.miniBioTitle")}</b>
        <br/>
      </p>
      <p>
        {t("aboutPage.miniBioContent")}
        <br/>
      </p>
      <p>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/solangegueiros" className={"menu-link-text"}>
          Twitter
        </a>        
        <br/>
      </p>
      <p>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/solangegueiros/" className={"menu-link-text"}>
          Linkedin
        </a>        
        <br/>
      </p>      
      <h3>
        <a target="_blank" rel="noopener noreferrer" href="https://photos.app.goo.gl/S64866GpCHbvhJk86" className={"menu-link-text"}>
          {t("aboutPage.profilePictures")}
        </a>
      </h3>
    </Layout>
  )
}

export default AboutPage


export const Head = () => (
  <>
    <SEO pageTitle={PageTitle} pageDescription="About me" />
  </>
)


// This is mandatory for every page using useTranslation() or anything from gatsby-plugin-react-i18next.
export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;