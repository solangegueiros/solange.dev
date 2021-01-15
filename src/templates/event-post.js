import React from "react"
import { graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

//import { LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
import Slides from "../components/slides"

const EventPost = ({ data, pageContext }) => {
  const intl = useIntl()
  const item = data.item
  const language = item.language  
  const video = item.video ? item.video.split('\n') : null;
  const article = item.article ? item.article.split('\n') : null;
  const slides = item.slides ? item.slides.split('\n') : null;
  const links = item.links ? item.links.split('\n') : null;
  //console.log ("slides:", slides, "\n", slides.length)
  //console.log ("video:", video, "\n", video.length)

/*
          {slides ? (<>
            <h3>
              {intl.formatMessage({ id: "slides" })}
            </h3>
            <ul>
              {slides.map((urlSlide, index) => (
                <Slides slideURL={urlSlide} slideTitle={item.title} />
              ))}
            </ul>           
          </>) : ("")}  
*/
  return (
    <Layout pageContext={pageContext}>
      {item ? (
        <>
          <SEO title={item.title  || `Title`} />

          <h1>{item.title}</h1>
          <p>{item.type}, {item.date}, {item.local}, {intl.formatMessage({ id: language })}</p>
          {item.organizer ? (<> <p>{intl.formatMessage({ id: "organizer" })} {item.organizer}</p> </>) : null}
          {item.description ? (<> <p>{item.description}</p> </>) : null}

          {item.video ? (<>
            <h3>
              {intl.formatMessage({ id: "video" })}
              {(video.length > 1) ? "s" : ""}
            </h3> 
            {video.map((url, index) => (
              <Video videoURL={url} videoTitle={item.title} />
            ))}            
          </>) : ("")}

          {article ? (<>          
            <h3>
              {intl.formatMessage({ id: "article" })}
              {(article.length > 1) ? "s" : ""}
            </h3>
            <ul>
              {article.map((url, index) => (
                <li key={index}>
                  <OutboundLink href={url} target="_blank" rel="noopener noreferrer">{url}</OutboundLink>
                </li>
              ))}
            </ul>           
          </>) : ("")}

          {links ? (<>
            <h3>
              {intl.formatMessage({ id: "links" })}
            </h3>
            <ul>
              {links.map((url, index) => (
                <li key={index}>
                  <OutboundLink href={url} target="_blank" rel="noopener noreferrer">{url}</OutboundLink>
                </li>
              ))}
            </ul>           
          </>) : ("")} 

        </>
      ) : (
        <div>{intl.formatMessage({ id: "not translated" })}</div>
      )}
    </Layout>
  )
}

export default EventPost

export const ItemPageQuery = graphql`
  query ItemDetails($slug: String!) {
    item(fields: {slug: {eq: $slug}}) {
      fields {
        slug
      }      
      title
      date(formatString: "DD MMMM, YYYY")
      category
      tags
      local
      type
      organizer
      language
      video
      article
      slides
      links
      photos
      description
      marketing
    }
  }
`
