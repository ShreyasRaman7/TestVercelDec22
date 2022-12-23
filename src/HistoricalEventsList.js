import React, { useState, useEffect } from 'react';
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
        const response = await fetch(`https://api.api-ninjas.com/v1/historicalevents?month=${props.month}&day=${props.day}`, {
          headers: { 'X-Api-Key': 'H4XHh4Z5ISHWmHZnmc/xeg==pSgMVBIJY3ih9m7w' },
        });
         data = await response.json();
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
    <ul>
     {data && console.log(data) }
      {data.map((myEvent) => (
        <li key={key1 += 1}>{myEvent.event}</li>
        
      ))}
    </ul>
    </div>
  );
}

export default HistoricalEventsList;
