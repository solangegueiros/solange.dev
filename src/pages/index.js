import * as React from 'react'
import { FaYoutube } from 'react-icons/fa' // YouTube icon
import { graphql } from 'gatsby'
import { Link, useTranslation } from 'gatsby-plugin-react-i18next'

import Layout from '../components/Layout'
import { SEO }  from "../components/Seo"

const PageTitle = "Home"
// console.log("PageTitle: ", PageTitle);

const IndexPage = ({ data, location }) => {
  //console.log("IndexPage location\n", JSON.stringify(location, null, 2));

  const { t } = useTranslation()
  const PageLocalized = t('homePage.title')
  const events = data.eventList

  return (
    <Layout pageTitle="" location={location}>
      <p>{t('homePage.welcomeMessage')}</p>

      <h2>{t("menu.events")}</h2>
      <p>{t("homePage.eventsTable")}</p>
      <table>
        <thead>
          <tr>
            <th>{t("in")} {t("en")}</th>
            <th>{t("in")} {t("es")}</th>
            <th>{t("in")} {t("pt")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.eventsEN.totalCount}</td>
            <td>{data.eventsES.totalCount}</td>
            <td>{data.eventsPT.totalCount}</td>
          </tr>
        </tbody>
      </table>        

      <Link to="/events/">
        <p> {t("homePage.allEvents")} - Total: {events.totalCount}</p>
      </Link>

      <h4>{t("homePage.lastEvents")}</h4>
            
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


      <br/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <SEO pageTitle={PageTitle} />
)

// This is mandatory for every page using useTranslation() or anything from gatsby-plugin-react-i18next.
export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    
    eventList: allItem(
      filter: {layout: {eq: "event"}, fields: {locale: {eq: $language}}}
      limit: 5
      sort: {date: DESC}
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
`;