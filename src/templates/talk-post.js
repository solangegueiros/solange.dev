import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image";
import Layout from "../components/layout"
import SEO from "../components/seo"

import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'


export default ({ data }) => {
  const post = data.markdownRemark
  //console.log ("\n post \n" + JSON.stringify(post))

  let slidesSN = false
  var slides = {name: "", publicURL: ""}
  let slidesIframe;
  if (post.frontmatter.slides) {
    slides = post.frontmatter.slides
    slidesSN = true
    slidesIframe = slides.publicURL + "#toolbar=0"
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

  var SiteSN = false
  if (post.frontmatter.site) {
    SiteSN = true
  }

  var gallerySN = false
  let fullSize
  let thumbs
  console.log ("\n gallery.totalCount \n" + data.gallery.totalCount)
  if (data.gallery.totalCount > 0) {
    gallerySN = true
    fullSize = data.gallery.edges.map(edge => edge.node.full.fluid.src)  
    //console.log ("\n fullSize \n" + JSON.stringify(fullSize))
    thumbs = data.gallery.edges.map(edge => edge.node.thumb.fluid)
  }


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
          {post.frontmatter.event}
          <br/>
          {post.frontmatter.title}        
        </h1>

        <table>
          <tbody>
            <tr>
              <td>Quando / When:</td>
              <td>{post.frontmatter.date}</td>
            </tr>
            <tr>
              <td>Onde / Where:</td>
              <td>{post.frontmatter.where}</td>
            </tr>
          </tbody>
        </table>

        <h3>
          {SiteSN === true ?  'Site: ': ''}
          {SiteSN === true ?  <a href={post.frontmatter.site} target="_blank" rel="noopener noreferrer">{post.frontmatter.event}</a> : ''}
        </h3>

        <p>
          {post.frontmatter.description}
        </p>

        <div>
          <h2>{videoSN === true ?  'Video': ''}</h2>        
          {videoSN === true ?  
            <iframe width="100%" height="440vh" src={videoLink} title={post.frontmatter.title} 
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            : ''}
        </div>

        <div>
          <h2>{slidesSN === true ?  'Slides': ''}</h2>        
          {slidesSN === true ?  
            <iframe src={slidesIframe} title={slides.name} width="105%" height="440"></iframe>
            : ''}
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <br/>
        <div>
          <h2>{gallerySN === true ?  'Fotos / Photos': ''}</h2>        
          {gallerySN === true ? <Gallery  thumbs={thumbs} images={fullSize} /> : ''}          
        </div>

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

    gallery: allFile(
      filter: { 
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        name: {ne: "banner"}
        relativeDirectory: { regex: $slug } 
      }
      sort: { fields: name }
    ) {
      totalCount
      edges {
        node {
          id
          name        
          thumb: childImageSharp {
            fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
          }
          full: childImageSharp {
            fluid(maxWidth: 1600, quality: 80
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

    slideshow: allFile(
      sort: { fields: name, order: DESC }
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        relativeDirectory: { regex: $slug }
      }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }    

  }
`
