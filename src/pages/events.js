import * as React from 'react'
import { graphql } from "gatsby"
import { useTranslation} from "react-i18next"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import Layout from '../components/layout'
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
            <small> {item.type}, {item.date} - {item.local}</small>
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
      }
    }
  }
`
