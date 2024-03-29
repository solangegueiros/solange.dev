import React from "react"

const Video = ({ videoURL, videoTitle }) => {

  //https://developers.google.com/youtube/player_parameters
  if ( videoURL.includes("youtu.be/", 0) ) {
    videoURL = videoURL.replace ("youtu.be/", "www.youtube.com/watch?v=")
  }
  if ( videoURL.includes("www.youtube.com/watch?v=", 0) ) {
    videoURL = videoURL.replace ("watch?v=", "embed/")
  }
  //console.log ("videoURL:", videoURL, "\n")

  return (
    <div className="responsive-video">
      <iframe
        src={videoURL}
        title={videoTitle}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"      
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        loop="1"
        rel="0"
      />
    </div>
  )
}

export default Video
