import * as React from "react"
import { graphql } from "gatsby"
import { LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Event = ({ data, pageContext }) => {
  const intl = useIntl()
  const locale = pageContext.locale
  const events = data.eventList.nodes  
  //console.log('\n events:\n',JSON.stringify(events, null, 4))

  return (
    <Layout pageContext={pageContext}>
      <SEO title="Events" />

      <h1>
        {intl.formatMessage({ id: "events" })} {" "}
        {intl.formatMessage({ id: "in" })} {" "} 
        {intl.formatMessage({ id: locale })}
      </h1>
      <h4>{data.eventList.totalCount} {intl.formatMessage({ id: "events" })}</h4>
      <br/>
      <ul>
        {events.map((item) => (
          <li key={item.id}>
            <LocalizedLink to={item.fields.slug}>
              <h4>{item.title}</h4>
            </LocalizedLink>
            <small> {item.type}, {item.date} - {item.local}</small>
          </li>
        ))}
      </ul>

    </Layout>
  )
}

export default Event

export const pageQuery = graphql`
  query($locale: String!) {
    eventList: allItem (
      filter: {
        layout: {eq: "event"}
        fields: {locale: {eq: $locale}}
      },
      sort: {fields: date, order: DESC}
    ) {
      totalCount
      nodes {
        id
        category
        date(formatString: "DD MMMM, YYYY")
        language
        local
        organizer
        tags
        title
        type
        fields {
          slug
        }
      }
    }
  }
`
