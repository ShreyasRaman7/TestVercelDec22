import React, { useState, useEffect } from 'react';
import axios from 'axios';
import soccerImg  from "./soccerHighlights.png";
import LiveSoccerGameStates from './LiveSoccerGameStates';
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
      {/* <div class="split left">
  <div class="centered">
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
</div>

<div class="split right">
  <div class="centered">
  <LiveSoccerGameStates/>
  </div>
</div> */}
      <div style={{ borderRadius:'12px', background: 'radial-gradient(circle, rgba(101,228,255,1) 0%, rgba(170,247,198,0.773546918767507) 65%)', width: '100%' }}><img src="https://i.postimg.cc/cJ3MMSC9/soccer-Highlights-removebg-preview.png" alt="A description of the image" /></div>
        
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
