import * as React from 'react'
import { graphql } from "gatsby"
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import { FaYoutube } from 'react-icons/fa' // YouTube icon

import Layout from '../components/Layout'
import { SEO }  from "../components/Seo"
import Video from "../components/video"


const EventPage = ({ data, children, pageContext: { language }, location }) => {
  const { t } = useTranslation();
  const event = data.item

  console.log("language:", language)
  const languageName = t(language)
  
  const title = event && event.title ? event.title : t("notTranslated");
  console.log("TITLE:", title)

  const video = event && event.video ? event.video.split('\n') : null;
  if (video)
    console.log ("video:", video, "\n", video.length)

  const article = event && event.article ? event.article.split('\n') : null;
  // if (article)
  //   console.log("ARTICLE:", article, "\n", article.length)

  const slides = event && event.slides ? event.slides.split('\n') : null;

  const links = event && event.links ? event.links.split('\n') : null;

  /*
    <Video videoURL={url} videoTitle={event.title} />
  */

  return (
    <Layout pageTitle={title} location={location}>

      <div>
        {event ? (
          <>
            <hr />        
            <p>{event.type}, {event.date}, {event.local}, {languageName}</p>
            {event.organizer ? (<> <p>{t("eventsPage.organizer")} {event.organizer}</p> </>) : null}
            {event.description ? (<> <p>{event.description}</p> </>) : null}
            
            {event.video ? (<>
              <h3>
                {t("video")}                
                {(video.length > 1) ? "s" : ""}
              </h3>
              {video.map((url, index) => (<>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: '0.5rem' }}
                    title={t("youTube")}
                    >
                    <FaYoutube
                      size="2em"                    
                      style={{ marginRight: '0.5rem', color: 'red', verticalAlign: 'middle' }}
                    />
                    {t("eventsPage.youtube")}
                  </a>
                </>
              ))}            
            </>) : ("")}


            {article ? (<>          
              <h3>
                {t("article")}                
                {(article.length > 1) ? "s" : ""}
              </h3>
              <ul>
                {article.map((url, index) => (
                  <li key={index}>
                    <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                  </li>
                ))}
              </ul>           
            </>) : ("")}

            {links ? (<>
              <h3>
                {t("links")}
              </h3>
              <ul>
                {links.map((url, index) => (
                  <li key={index}>
                    <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                  </li>
                ))}
              </ul>           
            </>) : ("")}

          </>
        ) : (
          <div>{t("notTranslated")}</div>
        )}
      </div>
    </Layout>      
  )    
}

export default EventPage

export const Head = ({ data }) => (  
  <SEO pageTitle={data?.item?.title ?? "Not Translated"} />
)

export const query = graphql`
  query ($language: String!, $slug: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    item(      
      fields: {locale: {eq: $language} }, slug: {eq: $slug}
    ) {
      fields {
        locale
        slug
      }      
      article
      date(formatString: "DD MMMM, YYYY")
      category
      description
      id
      language
      layout
      links
      local
      marketing      
      organizer
      photos
      slides
      slug
      tags
      title
      type
      video
    }
  }
`;