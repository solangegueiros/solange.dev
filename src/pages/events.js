import * as React from 'react'
import { FaYoutube } from 'react-icons/fa' // YouTube icon
import { graphql } from "gatsby"
import { useTranslation} from "react-i18next"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import Layout from '../components/Layout'
import Seo from "../components/seo"

const Events = ({ data, pageContext }) => {
  const { t } = useTranslation()

  const eventList = data.eventList;
  //console.log("Event List \n", eventList);

  return (
    <Layout pageContext={pageContext} pageTitle={t("events")}>
      <Seo title={t("events")} />

      <p>Total: {eventList.totalCount}</p>
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

export default Events

export const pageQuery = graphql`
  query ($locale: String!) {
    eventList: allItem(
      filter: {layout: {eq: "event"}, fields: {locale: {eq: $locale}}}
      sort: {fields: date, order: DESC}
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
`
