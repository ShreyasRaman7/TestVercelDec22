import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';

let data=[]
let key1 =0
function HistoricalEventsList(props) {
  const [events, setEvents] = useState([]);
  const [month, setMonth] = useState(null);
  const [day, setDay] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    setMonth(currentDate.getMonth() + 1);
    setDay(currentDate.getDate());
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(props.text)
        console.log("props:",props.month," day:",props.day)
        const currentDate = new Date();
    console.log(currentDate.getMonth() + 1);
    console.log(currentDate.getDate());
        console.log(`https://api.api-ninjas.com/v1/historicalevents?month=${currentDate.getMonth() + 1}&day=${currentDate.getDate()}`)
        const response = await fetch(`https://api.api-ninjas.com/v1/historicalevents?month=${currentDate.getMonth() + 1}&day=${currentDate.getDate()}`, {
          headers: { 'X-Api-Key': 'H4XHh4Z5ISHWmHZnmc/xeg==pSgMVBIJY3ih9m7w' },
        });
         
         data = await response.json();
         console.log("response:",response); 
        setEvents(data.map((event, index) => {
            return {
              id: index,
              description: event.description
            }
          }))
          
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.text]);

  return (
    <div>
    <h1 style={{ color: 'blue', textShadow: '1px 2px 2px black' }}></h1>
    <h1 style={{
  color: 'black',
  fontSize: '48px',
  fontWeight: 'bold',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  textTransform: 'uppercase'
}}>
        <div style={{ borderRadius:'12px', background: 'radial-gradient(circle, rgba(224,218,207,1) 0%, rgba(255,222,173,1) 100%)', height:'10%',  width: '100%' }}><img width={'50%'} height={'10%'} src="https://i.postimg.cc/K8v6J3cR/image-removebg-preview.png" alt="A description of the image" /> <h3></h3></div>
        Historical Events for Today: {month}/{day}
    
  
</h1>

    {/* <ul style={{padding: '10px', backgroundColor: 'darkgray', borderRadius: '5px'}}>
     {data && console.log(data) }
      {data.map((myEvent) => (
        <li key={key1 += 1}> Year: {myEvent.year}: {myEvent.event}</li>
        
      ))}
    </ul> */}
    <Box sx={{ width: '100%',  bgcolor: 'background.paper' }}>
    <List style={{padding: '10px', color:'#0047AB', borderRadius: '5px'  }}>
    {data && console.log(data) }
      {data.map((myEvent) => (
        <ListItem style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '10px',
            padding: '10px',
            backgroundColor: '#f4f4f4',
          }} key={key1 += 1}> Year: {myEvent.year}: {myEvent.event}</ListItem>
        
        
      ))}
    </List>
    </Box>
    </div>
  );
}

export default HistoricalEventsList;
