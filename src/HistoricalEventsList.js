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
    <span>Historical Events for Today: {month}/{day}</span>
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
