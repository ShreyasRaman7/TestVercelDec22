import React, { useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
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

//   return (
//     < div style={{ background: weather.temp < 20 ? blueGradient : redOrangeGradient }}>
       
//       <form onSubmit={handleSubmit}>
//         <label>
//           City:
//           <input type="text" value={city} onChange={handleChange} />
//         </label>
//         <button type="submit">Get Weather</button>
//       </form>
//       {weather ? (
//         <div>
//              {console.log(weather)}

//           <p>Temperature: {weather.temp}°C</p>
//           <p>Feels Like: {weather.feels_like}°C</p>
          
//           <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       <nav aria-label="main mailbox folders">
//         <List>
//         <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <LocationOnIcon /> { city.charAt(0).toUpperCase()+city.slice(1)}
//               </ListItemIcon>
//               <ListItemText primary="Location" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <ThermostatIcon /> <>{weather.temp}°C</>
//                 <>, feels Like: {weather.feels_like}°C</> , {(weather.temp * 9) / 5 + 32} °F , feels Like: {(weather.feels_like * 9) / 5 + 32} °F
//               </ListItemIcon>
//               <ListItemText primary="" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <WbSunnyIcon />
//               </ListItemIcon>
//               <ListItemText primary="Sun" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <AirIcon /> Windspeed: { (weather.wind_speed)} km/h , { (weather.wind_speed * 0.62).toFixed(2)} mph
//               </ListItemIcon>
//               <ListItemText primary="" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <DraftsIcon />
//               </ListItemIcon>
//               <ListItemText primary="Drafts" />
//             </ListItemButton>
//           </ListItem>
//         </List>
//       </nav>
//       <Divider />
      
//     </Box>
          
//         </div>
//       ) : null}
//     </>
//   );

  return (
    <div style={{ background: weather && weather.temp < 20 ? blueGradient : redOrangeGradient  }}>
      
      
      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input type="text" value={city} onChange={handleChange} />
        </label>
        <button type="submit">Get Weather</button>
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
  );


}

export default WeatherComponent;
