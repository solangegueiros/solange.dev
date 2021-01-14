import * as React from "react"
//import { LocalizedLink } from "gatsby-theme-i18n"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useIntl } from "react-intl"

const About = ({ pageContext }) => {
  const intl = useIntl()

  return (
    <Layout pageContext={pageContext}>
      <SEO title="About" />
       
      <h1>{intl.formatMessage({ id: "about" })}</h1>
      
      <p>
        {intl.formatMessage({ id: "about content" } )}
        <br/><br/>
        Sol - Solange Gueiros
      </p>

    </Layout>
  )
}

export default About
