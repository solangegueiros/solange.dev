import * as React from "react"
import { graphql } from "gatsby"
import { LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data, pageContext }) => {
  const intl = useIntl()
  const locale = pageContext.locale

  return (
    <Layout pageContext={pageContext}>
      <SEO title="Blog" />

      <h1>
        {intl.formatMessage({ id: "blog" })} {" "}
        {intl.formatMessage({ id: "in" })} {" "} 
        {intl.formatMessage({ id: locale })}
      </h1>

      <br/>
      <p> {intl.formatMessage({ id: "blog introduction" })} </p>
      <ul>
        {data.allFile.nodes.map(({ childMdx: node }) => (
          <li key={node.fields.slug}>            
            <LocalizedLink to={node.fields.slug}>
              <h4>{node.frontmatter.title}</h4>
            </LocalizedLink>            
            <small>
              {node.frontmatter.date}
              <br/>
              {node.frontmatter.description}
            </small>
          </li>
        ))}
      </ul>
      </Layout>
  )
}

export default Blog


export const query = graphql`
  query($locale: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        childMdx: { fields: { locale: { eq: $locale } } }
      },
      sort: {fields: childrenMdx___frontmatter___date, order: DESC}
    ) {
      totalCount
      nodes {        
        childMdx {
          fields {
            slug
          }           
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`