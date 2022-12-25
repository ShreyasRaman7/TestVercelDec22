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
    <div><div style={{ borderRadius:'12px', background: 'radial-gradient(circle, rgba(101,228,255,1) 0%, rgba(170,247,198,0.773546918767507) 65%)',  width: '100%' }}><img width={'50%'} height={'10%'} src="https://i.postimg.cc/0y928dRV/Screenshot-at-Dec-24-14-41-58-removebg-preview.png" alt="A description of the image" /></div>
    <ul>
      { !gameStates && <li>No games found: due to api call timeout.</li>}
      {console.log(gameStates)}
      {Array.isArray(gameStates.events) && gameStates.events.map(gameState => (
        <li key={gameState.id}>
          {gameState.homeTeam.name} vs {gameState.awayTeam.name}  {gameState.awayScore.current} : {gameState.awayScore.current}
        </li>
      ))}
    </ul>
    </div>
  );
};

export default LiveSoccerGameStates;
