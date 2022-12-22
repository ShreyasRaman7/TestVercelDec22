import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SoccerHighlights() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://free-football-soccer-videos.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key': 'c45f2f9687msh24becdeb95d1334p15b4b8jsn8fb2a5cd01ce',
        'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
      }
    };
    axios.request(options)
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // empty array ensures that the effect only runs once when the component mounts

  return (
    <div>
        
        {console.log(videos)}
      {videos.map(video => (
        <div key={video.id}>
          <h3>{video.title}</h3>
          <p>Date: { Date(video.date)}</p>
          
}
          <iframe src={video.embed.match(/src='([^']*)'/)[1]} />
          
          <a href={video.link} onClick={() => playVideo(video.embed)}></a>
        </div>
      ))}
      
    </div>
  );
  
}

function playVideo(embed) {
  // code to play the video using the provided link
  console.log(embed)
  return

}

export default SoccerHighlights;
