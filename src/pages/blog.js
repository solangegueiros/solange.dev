import * as React from 'react'
import { graphql } from 'gatsby'
import { Link, useTranslation } from 'gatsby-plugin-react-i18next'
import ReactMarkdown from "react-markdown";

import Layout from '../components/Layout'
import { SEO }  from "../components/Seo"

const PageTitle = "Blog"

//allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
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
    blogs: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { 
        fields: {locale: {eq: $language} } 
        internal: {contentFilePath: {regex: "/blog/"}}
      }
    ) {
        nodes {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
          id
          excerpt
        }
      }
    }
  `

const BlogPage = ({ data, pageContext: { language }, location }) => {
  const { t } = useTranslation();


  return (
    <Layout pageTitle={PageTitle} location={location}>
      <p> Use the sidebar navigation</p>
    </Layout>
  )
}

export default BlogPage

export const Head = () => (
  <SEO pageTitle={PageTitle} />
)


