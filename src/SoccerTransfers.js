import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SoccerTransfers = () => {
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://soccer-transfers.p.rapidapi.com/en',
      headers: {
        'X-RapidAPI-Key': 'c45f2f9687msh24becdeb95d1334p15b4b8jsn8fb2a5cd01ce',
        'X-RapidAPI-Host': 'soccer-transfers.p.rapidapi.com'
      }
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
        {transfers && transfers.map((transfer, index) => (
          <li key={index}>{transfer.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SoccerTransfers;
