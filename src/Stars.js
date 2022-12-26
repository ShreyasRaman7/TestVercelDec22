import React, { useState, useEffect } from 'react';

const API_ENDPOINT = 'https://api.visibleplanets.dev/v3';

export function Stars({ defaultLatitude, defaultLongitude }) {
  const [latitude, setLatitude] = useState(defaultLatitude);
  const [longitude, setLongitude] = useState(defaultLongitude);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${API_ENDPOINT}?latitude=${latitude}&longitude=${longitude}`
      );
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, [latitude, longitude]);

  return (
    <div>
      <form>
        <label htmlFor="latitude">Latitude:</label>
        <input
          id="latitude"
          type="number"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <br />
        <label htmlFor="longitude">Longitude:</label>
        <input
          id="longitude"
          type="number"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </form>
      {data ? (
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
