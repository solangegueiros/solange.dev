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

        <h2>
          Artigos - Posts
        </h2>
        <h4>{data.allPosts.totalCount} Posts</h4>
        {data.allPosts.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
            >
              <h3>
                {node.frontmatter.title}{" "}
              </h3>
            </Link>
            <p>
              <span>
                {node.frontmatter.date} - {node.timeToRead} min to read
              </span>
            </p>
            <p>{node.frontmatter.description}</p>            
          </div>
        ))}

        <br/>
        
      </div>
    </Layout>
  )
}

        {/* <h3>
          Palestras e entrevistas - Talks and interviews
        </h3>
        <h4>{data.allTalks.totalCount} events</h4>
        {data.allTalks.edges.map(({ node }) => (
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
        ))} */}


export const query = graphql`
  query {
    allTalks: allMarkdownRemark(
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
    allPosts: allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {type: {eq: "blog"}}}
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