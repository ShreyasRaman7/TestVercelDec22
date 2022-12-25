

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

  const MailToLink = ({ email }) => {
    const handleClick = () => {
      window.open(`mailto:${email}`);
    };
  
    return (
      <a href="#" onClick={handleClick}>
        {email}
      </a>
    );
  };

  return (
    
    <div style={style}>
      {/* Your component content goes here 729 × 427*/}
      <img src={sandBox2} alt="Description of image" style={{ width: '546.75px', height: '320.25px' }} />
      
      <Box style={{ background: 'radial-gradient(circle, rgba(43,27,57,0.0) 35%, rgba(71,52,83,0) 100%)' }}>

      <MailToLink email="ramanshreyas.gm@gmail.com" />
      <h4>My LinkedIn and Github:</h4>
      <a href="https://github.com/ShreyasRaman7"><img src="https://i.ibb.co/jTxFSKK/githublogo.webp" alt="19-199380-github-log-hd-png-download" alt="Github Link" border="0" height="100" width="250"/></a>
    <a href="https://www.linkedin.com/in/ramanshreyas/"><img src="https://i.ibb.co/kcvx24F/linkedin-logo.png" alt="LinkedIn Link" border="0" height="100" width="100"/></a>
    


    


    <p>© 2022 Shreyas Raman.</p>
      </Box>
      
    
        
    </div>
  );
};

export default HomePage;
