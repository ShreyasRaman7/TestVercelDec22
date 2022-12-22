import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LiveSoccerGameStates = () => {
  const [gameStates, setGameStates] = useState([]);

  useEffect(() => {
    const fetchGameStates = async () => {
      const options = {
        method: 'GET',
        url: 'https://footapi7.p.rapidapi.com/api/matches/live',
        headers: {
          'X-RapidAPI-Key': 'c45f2f9687msh24becdeb95d1334p15b4b8jsn8fb2a5cd01ce',
          'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setGameStates(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGameStates();
  }, []);

  return (
    <ul>
      <li>This can only be used once a day due to Timeout of Api Calls,error 429</li>
      {console.log(gameStates)}
      {Array.isArray(gameStates.events) && gameStates.events.map(gameState => (
        <li key={gameState.id}>
          {gameState.homeTeam.name} vs {gameState.awayTeam.name}  {gameState.awayScore.current} : {gameState.awayScore.current}
        </li>
      ))}
    </ul>
  );
};

export default LiveSoccerGameStates;
