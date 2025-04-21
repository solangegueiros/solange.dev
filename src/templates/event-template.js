import * as React from "react"
import { graphql, Link } from "gatsby"
import { useTranslation} from "react-i18next"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Video from "../components/video"


const EventTemplate = ({ data, pageContext }) => {
  const { t } = useTranslation()
  const event = data.item
  //console.log("EVENT:", event)

  //var title = t("notTranslated")
  const title = event && event.title ? event.title : t("notTranslated");
  console.log("TITLE:", title)
  
  //const language = event.fields.locale 
  //const language = event.language
  const video = event && event.video ? event.video.split('\n') : null;
  // if (video)
  //   console.log ("video:", video, "\n", video.length)

  const slides = event && event.slides ? event.slides.split('\n') : null;
  //console.log ("slides:", slides, "\n", slides.length)
  
  const article = event && event.article ? event.article.split('\n') : null;
  // if (article)
  //   console.log("ARTICLE:", event.article)

  const links = event && event.links ? event.links.split('\n') : null;

  console.log("\n")

/*
          {slides ? (<>
            <h3>
              {intl.formatMessage({ id: "slides" })}
            </h3>
            <ul>
              {slides.map((urlSlide, index) => (
                <Slides slideURL={urlSlide} slideTitle={event.title} />
              ))}
            </ul>           
          </>) : ("")}  
*/
  return (
    <Layout pageContext={pageContext} pageTitle={title}>
      <Seo title={title} />     

      <div>
        {event ? (
          <>
            <p>{event.type}, {event.date}, {event.local}, {t("language")}</p>
            {event.organizer ? (<> <p>{t("organizer")} {event.organizer}</p> </>) : null}
            {event.description ? (<> <p>{event.description}</p> </>) : null}

            {event.video ? (<>
              <h3>
                {t("video")}                
                {(video.length > 1) ? "s" : ""}
              </h3> 
              {video.map((url, index) => (
                <Video videoURL={url} videoTitle={event.title} />
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
                    <Link href={url} target="_blank" rel="noopener noreferrer">{url}</Link>
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
                    <Link href={url} target="_blank" rel="noopener noreferrer">{url}</Link>
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

export default EventTemplate

export const ItemPageQuery = graphql`
  query ($locale: String!, $slug: String!) {
    item(      
      fields: {locale: {eq: $locale} }, slug: {eq: $slug}
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

`
