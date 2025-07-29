import * as React from 'react'
import { FaYoutube } from 'react-icons/fa' // YouTube icon
import { graphql } from 'gatsby'
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next'

import Layout from '../components/Layout'
import { SEO }  from "../components/Seo"

const PageTitle = "Events"
// console.log("PageTitle: ", PageTitle);

const EventsPage = ({ data, location }) => {
  console.log("EventsPage location\n", JSON.stringify(location, null, 2));

  const { t } = useTranslation()
  const PageLocalized = t('eventsPage.title')
  const { language } = useI18next()

  const eventList = data.eventList;
  console.log("Event List \n", eventList.length);  

  // No events found
  if (!eventList || !eventList.nodes || eventList.nodes.length === 0) {
    return (
      <Layout pageTitle={PageLocalized} location={location}>        
        <p>🌍 Language: {language.toUpperCase()}</p>
        <p>{t('eventsPage.description')}</p>
        <p>{t("noEventsFound")}</p>
      </Layout>
    )
  }
  else {   
    return (
      <Layout pageTitle={PageLocalized} location={location}>        
        <p>🌍 Language: {language.toUpperCase()} - Total: {eventList.totalCount}</p>
        <br/>

        <ul>
          {eventList.nodes.map((item) => (
            <li key={item.id}>
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
                {item.type}, {item.date} - {item.local}              
              </small>
            </li>
          ))}
        </ul>        
      </Layout>
    )
  }

}

export default EventsPage

export const Head = () => (
  <SEO pageTitle={PageTitle} />
)

// This is mandatory for every page using useTranslation() or anything from gatsby-plugin-react-i18next.
export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
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
      sort: {date: DESC}
    ) {
      totalCount
      nodes {
        date(formatString: "DD MMMM, YYYY")
        id
        local
        slug
        title
        type
        video
        hasYouTube
        youtubeId
      }
    }      
  }
`;

