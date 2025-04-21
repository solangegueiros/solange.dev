import * as React from 'react'
import { graphql } from "gatsby"
import { useTranslation} from "react-i18next"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import Layout from '../components/Layout'
import Seo from "../components/seo"

const Blog = ({ data, pageContext }) => {
  const { t } = useTranslation("blog")

  const postList = data.blogList;
  //console.log("Blog List \n", postList);

  return (
    <Layout pageContext={pageContext} pageTitle={t("blog")}>      
      <Seo title={t("blog")} />
      <p>{t("blog introduction")}</p>
      <p>Total: {postList.totalCount}</p>
      <br/>
      {
        postList.nodes.map(({ childMdx: node }) => (
          <article key={node.frontmatter.slug}>
            <h2>
              <Link to={`/blog${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>            
            <p>{t("posted")}: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}
//<Link to={`/blog/${node.frontmatter.slug}`}>
//<Link to={node.frontmatter.slug}>
//<Link to={node.slug}>

export const query = graphql`
  query($locale: String!) {
    blogList: allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        childMdx: { fields: { locale: { eq: $locale } } }
      }
    ) {
      totalCount
      nodes {
        childMdx {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            slug
            title            
          }
          id
        }
      }
    }
  }
`

export default Blog
