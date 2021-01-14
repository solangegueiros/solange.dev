import React from "react"
const path = require("path");

const Slide = ({ slideURL, slideTitle }) => {
  
  //https://www.labnol.org/embed-google-slides-200615
  if ( slideURL.includes("docs.google.com/presentation/", 0) ) {    
    slideURL = slideURL + "/embed"
  }
  else {
    slideURL = null
  //   var ext = path.extname(slideURL)
  //   console.log ("ext:", ext)  
  //   if ( slideURL.includes(".pdf", 0) ) {    
  //     var filename = path.basename(slideURL)
  //     slideURL = "/presentations/" + filename
  //   }  
  }
  console.log ("slideURL:", slideURL)  
  /*
      <p>
        <a href={slideURL} target="_blank" rel="noopener noreferrer">{slideURL}</a>
      </p>
  */

  return (
    <div className="responsive-google-slides">
      {slideURL ? (
        <iframe
          src={slideURL}
          title={slideTitle}
        />
      ): ("")}
    </div>
  )
}

export default Slide
