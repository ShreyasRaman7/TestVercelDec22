

import React from 'react';
import background1 from "./background1.jpg";
import logo from "./logo.png"
import sandboxImg from "./shreyasSandbox.png"
import sandBox2 from "./shreyassandbox2-transformed.png"

const HomePage = () => {
  const style = {
    backgroundImage: `url(${background1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw'
  };

  return (
    
    <div style={style}>
      {/* Your component content goes here 729 × 427*/}
      <img src={sandBox2} alt="Description of image" style={{ width: '546.75px', height: '320.25px' }} />
        
    </div>
  );
};

export default HomePage;
