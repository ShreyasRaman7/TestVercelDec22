import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SoccerTransfers = () => {
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.visibleplanets.dev/v3?latitude=32&longitude=-99',
      
    };

    axios.request(options).then(function (response) {
      setTransfers(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  return (
    <div>
      <h2>Soccer Transfers</h2>
      <ul>
        <li>Probably hasnt loaded yet,api issue</li>
        {console.log( transfers)}
        {transfers && transfers.data.map((transfer, index) => (
          <li key={index}>{transfer.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SoccerTransfers;
