import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image";
import Layout from "../components/layout"
import SEO from "../components/seo"

import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'
import { toUnicode } from "punycode";


export default ({ data }) => {
  const post = data.markdownRemark
  //console.log ("\n post \n" + JSON.stringify(post))

  const images = data.allFile.edges
  //console.log ("\n images \n" + JSON.stringify(images))

  const fullSize = data.images.edges.map(edge => edge.node.full.fluid.src)  
  //console.log ("\n fullSize \n" + JSON.stringify(fullSize))
  const thumbs = data.images.edges.map(edge => edge.node.thumb.fluid)
  
  var slidesSN = false
  var slides = {name: "", publicURL: ""}
  var slidesHeight = "1"
  if (post.frontmatter.slides) {
    slides = post.frontmatter.slides
    slidesHeight = "440"
    slidesSN = true
  } 
 
  var bannerSN = false
  var bannerFluid = ""
  if (data.banner) {
    bannerFluid = data.banner.childImageSharp.fluid
    bannerSN = true
  }
  //console.log ("\n bannerFluid \n" + JSON.stringify(bannerFluid))

  var videoSN = false
  var videoLink = ""
  if (post.frontmatter.video) {
    videoLink = post.frontmatter.video
    videoSN = true
  }

  /*
      <h2>Slides</h2>        
      <object data={slides.publicURL} type="application/pdf" title={slides.name} width="100%" />  

      <iframe src={"http://docs.google.com/gview?url=" + slides.publicURL + "&embedded=true"} width="100%" height={slidesHeight} frameborder="0"></iframe>
  */

  /*
          style={{ height: "40vh", width: "60vw" }}

  style={{ display: "block", height: "30vh", width: "50vw", left: "calc(-50vw + 50%);", position: "relative;", 'object-fit': "cover;" }}
  style={{ display: "block", height: "25vh", width: "100vw", left: "calc(-50vw + 50%);", position: "relative;" }}
  style={{ display: "block", height: "30vh", width: "50vw", left: "calc(-50vw + 50%);", position: "relative;" }}
  style={{ height: "35vh", width: "60vw" }}
  style={{position: "fixed", top: "0", bottom: "0", left: "0", right: "0", 'max-width': "100%", 'max-height': "100%", margin: "auto", overflow: "auto"}}
          top: "0", bottom: "0", left: "0", right: "0", 'max-width': "100%", margin: "auto", overflow: "auto", 
  style={{height: "30vh", width: "100vw", position: "fixed", top: "0", bottom: "0", left: "0", right: "0", 'max-width': "100%", 'max-height': "100%", margin: "auto", overflow: "auto"}}
  style={{height: "30vh", width: "100vw", position: "relative", 'padding-left': "0 !important", 'padding-right': "0 !important" }}
          style={{height: "30vh", width: "100vw", position: "relative", 'padding-left': "-50vw !important", 'padding-right': "0 !important" }}
  */
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description} />

      {bannerSN === true ?
        <Img 
          fluid={bannerFluid}
          style={{ height: "40vh", width: "60vw" }}
          />
      : ''}      

      <div>

        <h1>
          Talk at {post.frontmatter.event}
          <br/>
          {post.frontmatter.title}        
        </h1>

        <table>
          <tbody>
            <tr>
              <td>When:</td>
              <td>{post.frontmatter.date}</td>
            </tr>
            <tr>
              <td>Where:</td>
              <td>{post.frontmatter.where}</td>
            </tr>
          </tbody>
        </table>

        <h3>
          <a href={post.frontmatter.site} target="_blank" rel="noopener noreferrer">{post.frontmatter.event}</a>
        </h3>

        <h2>{videoSN === true ?  'Video': ''}</h2>        
        {videoSN === true ?  
          <iframe width="100%" height="400vh" src={videoLink} 
          frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          : ''}

        <h2>{slidesSN === true ?  'Slides': ''}</h2>        
        {slidesSN === true ?  
          <embed src={slides.publicURL} title={slides.name} name={slides.name} width="100%" height={slidesHeight} type="application/pdf"/>
          : ''}

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <br/>

    </Layout>
  )
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        event
        date(formatString: "DD-MMM-YYYY")
        where
        site
        video
        slides {
          name
          publicURL
        }        
      }
      html      
    }

    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        relativeDirectory: { regex: $slug }
      }
    ) {
      edges {
        node {
          id
          name
          relativePath
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }         
        }
      }
    }

    images: allFile(
      filter: { 
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        relativeDirectory: { regex: $slug } 
      }
      sort: { fields: name }
    ) {
      edges {
        node {
          id
          thumb: childImageSharp {
            fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
          }
          full: childImageSharp {
            fluid(
              maxWidth: 1024
              quality: 85
              srcSetBreakpoints: [576, 768, 992, 1200]
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    banner: file(
      relativeDirectory: { regex: $slug }
      name: {eq: "banner"}
      ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  }
`
