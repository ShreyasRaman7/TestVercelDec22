import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
let key1 =0
function NFLSchedule() {
  const [schedule, setSchedule] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const blueGradient = 'radial-gradient(circle, rgba(129,191,98,1) 0%, rgba(185,255,191,1) 65%)';
  const redOrangeGradient = 'radial-gradient(circle, rgba(255,72,72,1) 0%, rgba(255,101,101,1) 65%)';
  const yellowGradient = 'radial-gradient(circle, rgba(243,247,170,1) 0%, rgba(255,207,101,1) 65%)';

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  

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
    <div  className={darkMode ? 'dark-mode' : 'light-mode'}>
    🏈 NFL Stats for 2022:
    {/* <table >
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
    </table> */}

    <Box sx={{ width: '100%',  bgcolor: 'background.paper' }}>
    {schedule._embedded && schedule._embedded.teamWinStatsList.map(game => (
         <List style={{padding: '10px', color:'#0047AB', borderRadius: '5px'  }}>
         {game && console.log(game) }
         <Box sx={{
        background:
          game && game.winRatePercentage < 0.5
            ? redOrangeGradient
            : game && game.winRatePercentage === 0.5
            ? yellowGradient
            : blueGradient
      }}>
         <ListItem style={{
                 border: '1px solid #ccc',
                 borderRadius: '5px',
                 marginBottom: '10px',
                 padding: '10px',
               }} key={key1 += 1}>  {game.name} ❖ <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> <h5 style={{marginRight:'10px 0', color:'#f8f4f4' ,  fontSize:'1'}} > {''}</h5> <h4 style={{color:'black'}}>         Wins: {game.wins}  ,Losses: {game.losses}  ,Win Rate : {game.winRatePercentage}%   </h4> </div>
               </ListItem>
               </Box>
           {/* {game.map((myEvent) => (
             <ListItem style={{
                 border: '1px solid #ccc',
                 borderRadius: '5px',
                 marginBottom: '10px',
                 padding: '10px',
                 backgroundColor: '#f4f4f4',
               }} key={key1 += 1}> Year: {myEvent.name}: {myEvent.name}</ListItem>
             
             
           ))} */}
         </List>
        ))}
    
    </Box>
    </div>
  );
}

export default NFLSchedule;
