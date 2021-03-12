import * as React from "react"
import { graphql } from "gatsby"
import { LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import Language from "../components/language"

const Index = ({ data, pageContext }) => {
  const intl = useIntl()
  const { title, description } = data.site.siteMetadata
  const posts = data.posts.nodes
  const events = data.events.nodes


  return (
    <Layout pageContext={pageContext}>
      <SEO title={title} />      
      
      <p>Sol (Solange Gueiros) {description}</p>

      <h2>{intl.formatMessage({ id: "events" })}</h2>
      <table>
        <thead>
          <tr>
            <th className="TableTextCenter" >{intl.formatMessage({ id: "in" })} {intl.formatMessage({ id: "en" })}</th>
            <th className="TableTextCenter" >{intl.formatMessage({ id: "in" })} {intl.formatMessage({ id: "es" })}</th>
            <th className="TableTextCenter" >{intl.formatMessage({ id: "in" })} {intl.formatMessage({ id: "pt" })}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="TableTextCenter" >{data.eventsEN.totalCount}</td>
            <td className="TableTextCenter" >{data.eventsES.totalCount}</td>
            <td className="TableTextCenter" >{data.eventsPT.totalCount}</td>
          </tr>
        </tbody>
      </table>
      <h4>{intl.formatMessage({ id: "last events" })}</h4>

      <ul>        
        {events.map((item) => (
          <li key={item.id}>
            <LocalizedLink to={item.fields.slug}>
              <h4>{item.title}</h4>
            </LocalizedLink>
            <small> {item.type} by {item.organizer}, {item.date} - {item.local}</small>
          </li>
        ))}
      </ul>
      <LocalizedLink to="/events/">
        {intl.formatMessage({ id: "all events" })}
      </LocalizedLink>      
      
      <br/>
      <br/>
      <h2>{intl.formatMessage({ id: "blog" })}</h2>

      <h4>{intl.formatMessage({ id: "last posts" })}</h4>
      <ul>        
        {posts.map(({ childMdx: node }) => (
          <li key={node.fields.slug}>
            <LocalizedLink to={node.fields.slug}>
              <h4>{node.frontmatter.title}</h4>
            </LocalizedLink>
          </li>
        ))}
      </ul>
      <LocalizedLink to="/blog/">
        {intl.formatMessage({ id: "all posts" })}
      </LocalizedLink>
      
      <br/>
      <br/>

    </Layout>
  )
}

export default Index


  /*
  <Language pageContext={pageContext} />
  <h1>{intl.formatMessage({ id: "home" })} {intl.formatMessage({ id: "helloWorld" })}</h1>

  //Count posts
      <table>
        <thead>
          <tr>
            <th className="TableTextCenter" >{intl.formatMessage({ id: "in" })} {intl.formatMessage({ id: "en" })}</th>
            <th className="TableTextCenter" >{intl.formatMessage({ id: "in" })} {intl.formatMessage({ id: "es" })}</th>
            <th className="TableTextCenter" >{intl.formatMessage({ id: "in" })} {intl.formatMessage({ id: "pt" })}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="TableTextCenter" >{data.postsEN.totalCount}</td>
            <td className="TableTextCenter" >{data.postsES.totalCount}</td>
            <td className="TableTextCenter" >{data.postsPT.totalCount}</td>
          </tr>
        </tbody>
      </table>
  */

export const query = graphql`
  query($locale: String!) {

    posts: allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        childMdx: { fields: { locale: { eq: $locale } } }
      }, 
      limit: 3, 
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
            date(formatString: "DD/MMM/YYYY")
          }
        }
      }
    }

    postsEN: allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        childMdx: { fields: { locale: { eq: "en" } } }
      } ) { 
      totalCount
    }

    postsES: allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        childMdx: { fields: { locale: { eq: "es" } } }
      } ) { 
      totalCount
    }

    postsPT: allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        childMdx: { fields: { locale: { eq: "pt" } } }
      } ) { 
      totalCount
    }    

    eventsEN: allItem (filter: {
      layout: {eq: "event"}
      fields: {locale: {eq: "en"} }
    }) {
      totalCount
    }  

    eventsES: allItem (filter: {
      layout: {eq: "event"}
      fields: {locale: {eq: "es"} }
    }) {
      totalCount
    }
  
    eventsPT: allItem (filter: {
      layout: {eq: "event"}
      fields: {locale: {eq: "pt"} }
    }) {
      totalCount
    }

    events: allItem(filter: {layout: {eq: "event"}, fields: {locale: {eq: $locale}}},
    limit: 3, sort: {fields: date, order: DESC}
    ) {
      totalCount
      nodes {
        id
        date(formatString: "DD/MMM/YYYY")
        local
        organizer
        title
        type
        fields {
          slug
        }
      }
    }

    site {
      siteMetadata {
        title
        description
      }
    }    
  }
`
