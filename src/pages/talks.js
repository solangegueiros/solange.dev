import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  //console.log(data)
  return (
    <Layout>
      <div>
        <h1>
          Talks
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Talks</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3> {node.frontmatter.title}{" "}</h3>
            </Link>
            <p>
              <span>
                {node.frontmatter.date} - {node.frontmatter.description}
              </span>
            </p>
            <br/>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {type: {eq: "talk"}}}
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD/MMM/YYYY")
            description
          }
          fields {
            slug
          }          
          timeToRead
          excerpt
        }
      }
    }
  }
`