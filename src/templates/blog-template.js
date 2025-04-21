import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation} from "react-i18next"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const BlogTemplate = ({ data, pageContext }) => {
  const { t } = useTranslation("blog")
  const post = data.mdx

  var title = t("notTranslated")
  if (post) {
    //var image = getImage(data.mdx.frontmatter.hero_image)
    title = post.frontmatter.title
  }

  return (
    <Layout pageContext={pageContext} pageTitle={title}>     
      <Seo title={title} />

      <div>        
        {post ? (
          <>            
            <small>{post.frontmatter.date}</small>
            <MDXRenderer>{post.body}</MDXRenderer>
        </>
        ) : (
          <div>{t("notTranslatedPost")}</div>
        )}
      </div>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query($locale: String!, $slug: String!) {
    mdx(
      fields: { locale: { eq: $locale } }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        slug
        title
      }
      body
    }
  }
`
