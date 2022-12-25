import React, { useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import CloudIcon from '@mui/icons-material/Cloud';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import AirIcon from '@mui/icons-material/Air';
import { WindPower } from '@mui/icons-material';



function WeatherComponent() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const blueGradient = 'linear-gradient(to right, #a8e9ff, #66b3ff)';
  const redOrangeGradient = 'linear-gradient(to right, #ff944d, #ff5e62)';
  const handleChange = (event) => {
    setCity(event.target.value);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'GET',
      url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
      params: { city },
      headers: {
        'X-RapidAPI-Key': 'c45f2f9687msh24becdeb95d1334p15b4b8jsn8fb2a5cd01ce',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    axios
      .request(options)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };



  return (
    <div style={{ height:'1000px', width:'100%',  background: weather && weather.temp < 20 ? blueGradient : redOrangeGradient  }}>
      <div><div style={{ borderRadius:'12px', background: 'radial-gradient(circle, rgba(101,228,255,1) 0%, rgba(170,247,198,0.773546918767507) 65%)',  width: '100%' }}><img  src="https://i.postimg.cc/FskD1Jcc/Screenshot-at-Dec-24-15-15-41-removebg-preview.png" alt="A description of the image" /></div>
     
      
      <form onSubmit={handleSubmit} style={{ fontSize: '20px', padding: '20px' }}>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        <h1 style={{ margin: 0 }}>City:</h1>
        <input type="text" value={city} onChange={handleChange} style={{ width: '50%', fontSize: '40px' }} />
      </label>
      <Button  variant='contained' type="submit" style={{ fontSize: '20px', padding: '10px 20px' }}>Get Weather</Button>
    </form>
      
        {weather && <div>
             {console.log(weather)}

             <Box sx={{ background: weather && weather.temp < 20 ? blueGradient : redOrangeGradient  }}>
      <nav aria-label="main mailbox folders">
        <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocationOnIcon /> { city.charAt(0).toUpperCase()+city.slice(1)}
              </ListItemIcon>
              <ListItemText primary="" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ThermostatIcon /> <>{weather.temp}°C</>
                <>, feels Like: {weather.feels_like}°C</> , {((weather.temp * 9) / 5 + 32).toFixed(1)} °F , feels Like: {((weather.feels_like * 9) / 5 + 32).toFixed(1)} °F
              </ListItemIcon>
              <ListItemText primary="" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CloudIcon /> Humidity: {weather.humidity}% , Cloud Pct: {weather.cloud_pct}%
              </ListItemIcon>
              <ListItemText primary="" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AirIcon /> Windspeed: { (weather.wind_speed)} km/h , { (weather.wind_speed * 0.62).toFixed(2)} mph
              </ListItemIcon>
              <ListItemText primary="" />
            </ListItemButton>
          </ListItem>
          
        </List>
      </nav>
      <Divider />
      
    </Box>


          </div>}
          


    </div>
    </div>
  );


}

export default WeatherComponent;
