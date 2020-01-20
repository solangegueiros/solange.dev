import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  //console.log(data)
  return (
    <Layout>
      <div style={{ margin: `1rem auto`, maxWidth: 800, padding: `0 1rem` }}>
        <p>
          This is my Blockchain Developers Blog.  
          For now I put all talks and interviews from 2019.  
          Some things are in Portuguese, others are in English.
          <br/>
          Este é meu blog para desenvolvedores Blockchain. 
          Por enquanto eu coloquei apenas minhas palestras e entrevistas de 2019. 
          Algumas coisas estão em português, outras em inglês.
          <br/>
          Sol - Solange Gueiros
        </p>
        <h3>
          Palestras e entrevistas - Talks and interviews
        </h3>
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