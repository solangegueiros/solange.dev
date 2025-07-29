import * as React from 'react'
import { graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import Layout from '../components/Layout'
import { SEO }  from "../components/Seo"

const PageTitle = "Projects"

const ProjectsPage = ({ location }) => {

  const { t } = useTranslation()
  const PageLocalized = t('projectsPage.title')

  return (
    <Layout pageTitle={PageLocalized} location={location}>
      <p>{t('projectsPage.description')}</p>

      <p>
        <a target="_blank" rel="noopener noreferrer" href="https://ethereum.solange.dev/" className={"nav-link-text"}>
          Ethereum Tutorials
        </a>          
      </p>

      <p>
        <a target="_blank" rel="noopener noreferrer" href="https://academy.rsk.dev.br/" className={"nav-link-text"}>
        RSK Academy
        </a>
      </p>

      <p>
        <a target="_blank" rel="noopener noreferrer" href="https://rsk.solange.dev/" className={"nav-link-text"}>
          RSK Tutorials
        </a>
      </p>
    </Layout>
  )
}

export default ProjectsPage

export const Head = () => (
  <SEO pageTitle={PageTitle} />
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