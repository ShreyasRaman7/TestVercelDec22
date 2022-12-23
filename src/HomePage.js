

import React from 'react';
import background1 from "./background1.jpg";
import logo from "./logo.png"
import sandboxImg from "./shreyasSandbox.png"
import sandBox2 from "./shreyassandbox2-transformed.png"
import Box from '@mui/material/Box';
const HomePage = () => {
  const style = {
    backgroundImage: `url(${background1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    
    <div style={style}>
      {/* Your component content goes here 729 × 427*/}
      <img src={sandBox2} alt="Description of image" style={{ width: '546.75px', height: '320.25px' }} />
      <p>© Shreyas Raman </p>
      <p>ramanshreyas.gm@gmail.com </p>
      <a href='https://www.linkedin.com/in/ramanshreyas/'>My LinkedIn </a>
      <p></p>
      <Box><a href='https://github.com/ShreyasRaman7?tab=repositories'>My GitHub</a></Box>
      
        
    </div>
  );
};

export default HomePage;
