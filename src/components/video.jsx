import React from "react"

const Video = ({ videoURL, videoTitle }) => {

  //https://developers.google.com/youtube/player_parameters
  if ( videoURL.includes("youtu.be/", 0) ) {
    videoURL = videoURL.replace ("youtu.be/", "www.youtube.com/watch?v=")
  }
  if ( videoURL.includes("www.youtube.com/watch?v=", 0) ) {
    videoURL = videoURL.replace ("watch?v=", "embed/")
  }
  console.log ("videoURL:", videoURL, "\n")

  return (
    <div className="responsive-video">
      <iframe
        src={videoURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"      
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        loop="1"
        rel="0"
        onError={() => console.log('Video cannot be embedded')}
      />
    </div>
  )
}

export default Video

/*
VideoEmbeddableCheck.jsx

import { useEffect, useState } from 'react';

// Get a YouTube Data API key from Google Cloud Console.
// Replace YOUR_API_KEY with your actual YouTube Data API key.

const VideoEmbeddableCheck = ({ videoId }) => {
  const [canEmbed, setCanEmbed] = useState(null);

  useEffect(() => {
    const checkEmbeddable = async () => {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=status&key=YOUR_API_KEY`
      );
      const data = await res.json();
      const embeddable = data.items?.[0]?.status?.embeddable;
      setCanEmbed(embeddable);
    };

    checkEmbeddable();
  }, [videoId]);

  return (
    <div>
      {canEmbed === null && <p>Checking...</p>}
      {canEmbed === true && <p>This video can be embedded ✅</p>}
      {canEmbed === false && <p>This video CANNOT be embedded ❌</p>}
    </div>
  );
};

// Usage
// <VideoEmbeddableCheck videoId="bBTjtur6LYA" />
*/
