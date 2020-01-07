import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <h1>Solange Gueiros</h1>
    <p>
    Blockchain engineer, focused in Ethereum. 
    <br/>
    I had been working on systems, projects and database for over 20 years and trading experience since 2011 at stock and cryptocurrency markets. 
    <br/>
    Academic background in Computer Science and Pedagogy at University of Sao Paulo, Brazil complements technical and didactic.
    <br/>
    I love to teach and I travel around the world to learn more and give talks in my country.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`