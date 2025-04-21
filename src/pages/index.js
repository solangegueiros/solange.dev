import * as React from 'react'
import { FaYoutube } from 'react-icons/fa' // YouTube icon
import { graphql } from "gatsby"
import { useTranslation} from "react-i18next"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
//import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import Seo from "../components/Seo"

const Index = ({ data, pageContext }) => {
  const { t } = useTranslation()
  const { title, description } = data.site.siteMetadata
  const posts = data.blogList
  const events = data.eventList
 
  return (
    <Layout pageContext={pageContext}>
      <Seo title={title} />

      <p>Sol (Solange Gueiros) {description}</p>

      <h2>{t("events")}</h2>
      <table>
        <thead>
          <tr>
            <th className="TableTextCenter" >{t("in")} {t("en")}</th>
            <th className="TableTextCenter" >{t("in")} {t("es")}</th>
            <th className="TableTextCenter" >{t("in")} {t("pt")}</th>
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

      <h4>{t("lastEvents")}</h4>
      <ul>
        {events.nodes.map((item) => (
          <article key={item.id}>
            <Link to={`/events${item.slug}`}>
              <h4>{item.title}</h4>
            </Link>
            <small>
              {item.hasYouTube && item.video && (
                <a
                  href={item.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: '0.5rem' }}
                  title="Watch on YouTube"
                  >
                  <FaYoutube
                    size="2em"                    
                    style={{ marginRight: '0.5rem', color: 'red', verticalAlign: 'middle' }}
                  />
                </a>
              )}               
              {item.type} by {item.organizer}, {item.date} - {item.local}
            </small>
          </article>
        ))}
      </ul>

      <br/>
      <Link to="/events/">
        <p> {t("allEvents")} - Total: {events.totalCount}</p>
      </Link>

      <br/>
    </Layout>
  )
}
/* Blog part - removed
      <br/>
      <h2>{t("blog")}</h2>

      <h4>{t("lastPosts")}</h4>
      <ul>
        {
          posts.nodes.map(({ childMdx: node }) => (
            <article key={node.frontmatter.slug}>
              <Link to={`/blog${node.frontmatter.slug}`}>
                <h4>{node.frontmatter.title}</h4>
              </Link>
              <small>Posted: {node.frontmatter.date}</small>
            </article>
          ))
        }
      </ul>
      <p>Total: {posts.totalCount}</p>
      <Link to="/blog/">
        {t("allPosts")}
      </Link>
*/

export default Index

export const query = graphql`
  query($locale: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }

    blogList: allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        childMdx: { fields: { locale: { eq: $locale } } }
      },
      limit: 2,
      sort: {fields: childrenMdx___frontmatter___date, order: DESC}
    ) {
      totalCount
      nodes {
        childMdx {
          frontmatter {
            date(formatString: "DD/MMM/YYYY")
            slug
            title            
          }
          id
        }
      }
    }
    
    eventList: allItem(
      filter: {layout: {eq: "event"}, fields: {locale: {eq: $locale}}}
      limit: 5,
      sort: {fields: date, order: DESC}
    ) {
      totalCount
      nodes {
        date(formatString: "DD MMMM, YYYY")
        id
        local
        organizer
        slug
        title
        type
        video
        hasYouTube
        youtubeId
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

  }
`