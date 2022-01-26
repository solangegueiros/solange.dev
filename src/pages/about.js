import * as React from 'react'
import { useTranslation} from "react-i18next"
import Layout from '../components/layout'
import Seo from "../components/seo"

const About = ({ pageContext }) => {
  const { t } = useTranslation()

  return (
    <Layout pageContext={pageContext} pageTitle={t("about")} >
      <Seo title={t("about")} />
      <br/>
      <p>
        {t("aboutContent1")}
        <br/>
        {t("aboutContent2")}
        <br/>
        {t("aboutContent3")}
        <br/>
        {t("aboutContent4")}
        <br/><br/>
        Sol - Solange Gueiros
      </p>
    </Layout>
  )
}

export default About