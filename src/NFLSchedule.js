import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NFLSchedule() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/win-stats/2022',
        headers: {
          'X-RapidAPI-Key': 'c45f2f9687msh24becdeb95d1334p15b4b8jsn8fb2a5cd01ce',
          'X-RapidAPI-Host': 'nfl-team-stats.p.rapidapi.com'
        }
      };

    axios.request(options).then(response => {
      setSchedule(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
        </tr>
      </thead>
      <tbody>
        {console.log(schedule._embedded)}
        {schedule._embedded && schedule._embedded.teamWinStatsList.map(game => (
          <tr  >
            <td>{game.name}</td>
            <td>Wins: <span className='winsLoss'>{game.wins}</span></td>
            <td>Losses: <span className='winsLoss' >{game.losses}</span></td>
            <td>winRatePercentage: <span className='winsLoss' >{game.winRatePercentage}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NFLSchedule;
