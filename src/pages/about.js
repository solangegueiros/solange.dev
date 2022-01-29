import * as React from 'react'
import { useTranslation} from "react-i18next"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from "../components/seo"
import {
  navLinkText,
} from '../styles/layout.module.css'

const About = ({ pageContext }) => {
  const { t } = useTranslation()

  return (
    <Layout pageContext={pageContext} pageTitle={t("about")} >
      <Seo title={t("about")} />
      <StaticImage width={200}
        alt="Solange Gueiros"
        src="../images/SolangeGueiros-2021-12-Rosto.jpg"
      />
      <h3>Mini bio</h3>
      <p>
        {t("miniBioContent")}
        <br/>
      </p>
      <h3>
        <a target="_blank" rel="noopener noreferrer" href="https://photos.app.goo.gl/S64866GpCHbvhJk86" className={navLinkText}>
          {t("profilePictures")}
        </a>
      </h3>
      <p>
        <br/><br/>
        Sol - Solange Gueiros
      </p>
      <br/>
    </Layout>
  )
}

export default About