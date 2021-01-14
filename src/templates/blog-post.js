import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
//import { LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data, pageContext }) => {
  const intl = useIntl()
  const post = data.mdx

  return (
    <Layout pageContext={pageContext}>

      <div>
        {post ? (
          <>
            <SEO title={post.frontmatter.title  || `Title`} />

            <h1>{post.frontmatter.title}</h1>
            <small>{post.frontmatter.date}</small>
            <MDXRenderer>{post.body}</MDXRenderer>
          </>
        ) : (
          <div>{intl.formatMessage({ id: "not translated" })}</div>
        )}
      </div>

    </Layout>
  )
}

export default BlogPost

// frontmatter: { slug: { eq: $slug } }
export const query = graphql`
  query($locale: String!, $slug: String!) {
    mdx(
      fields: { 
        locale: { eq: $locale } 
        slug: { eq: $slug }
      }
    ) {      
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
      }
      body      
    }
  }
`
