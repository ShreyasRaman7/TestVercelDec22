import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
`;

const GridItem = styled.div`
    background: radial-gradient(circle, rgba(206,236,247,1) 0%, rgba(234,255,253,1) 100%);
  height: 200px;
  width: 200px;
`;


const NutritionSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${query}`, {
        headers: {
          'X-Api-Key': 'H4XHh4Z5ISHWmHZnmc/xeg==pSgMVBIJY3ih9m7w'
        }
      });
      if (!response.ok) {
        throw new Error(response.statusText);

      }
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
                <div style={{ borderRadius:'12px', background: 'radial-gradient(circle, rgba(22,255,240,0.45) 0%, rgba(193,245,240,1) 100%)', height:'10%',  width: '100%' }}><img width={'50%'} height={'10%'} src="https://i.postimg.cc/MZ10rsXF/image.png" alt="A description of the image" /> <h3></h3></div>

        
      <form onSubmit={handleSubmit}>
        <label>
          Query:
          <input type="text" value={query} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {/* {!results && <b>results are undefined</b>} */}
      {results ? (
        <div>
          <h2>{query.charAt(0).toUpperCase() + query.slice(1).toLowerCase()} Results:</h2>
          {/* <pre>{JSON.stringify(results, null, 2)}</pre> */}
          {console.log(results[0])}
          <GridContainer>
      <GridItem><h1 style={{ color: 'steelblue' }}>{results[0]&& results[0].calories  }</h1><span ><h3 style={{ color: '#343434' }} >Calories</h3></span></GridItem>
      <GridItem><h1 style={{ color: 'maroon' }}>{results[0]&& results[0].carbohydrates_total_g}</h1><span ><h5 style={{ color: '#343434' }} >Grams of Carbohydrates</h5></span></GridItem>
      <GridItem><h1 style={{ color: 'seagreen' }}>{results[0]&& results[0].cholesterol_mg}</h1><span ><h5 style={{ color: '#343434' }} >mg of Cholesterol</h5></span></GridItem>
      <GridItem><h1 style={{ color: 'slateblue' }}>{results[0]&& results[0].fat_saturated_g}</h1><span ><h5 style={{ color: '#343434' }} >Grams of Saturated Fat</h5></span></GridItem>
      <GridItem><h1 style={{ color: 'cadetblue' }}>{results[0]&& results[0].fat_total_g}</h1><span ><h4 style={{ color: '#343434' }} >Grams of Fat
</h4></span></GridItem>
      <GridItem><h1 style={{ color: 'crimson' }}>{results[0]&& results[0].fiber_g}</h1><span ><h4 style={{ color: '#343434' }} >Grams of Fiber</h4></span></GridItem>
      <GridItem><h1 style={{ color: 'steelblue' }}>{results[0]&& results[0].potassium_mg}</h1><span ><h5 style={{ color: '#343434' }} >mg of Potassium</h5></span></GridItem>
      <GridItem><h1 style={{ color: 'maroon' }}>{results[0]&& results[0].protein_g}</h1><span ><h5 style={{ color: '#343434' }} >Grams of Protein</h5></span></GridItem>
      <GridItem><h1 style={{ color: 'seagreen' }}>{results[0]&& results[0].serving_size_g}</h1><span ><h5 style={{ color: '#343434' }} >Grams Serving Size</h5></span></GridItem>
      <GridItem><h1 style={{ color: 'slateblue' }}>{results[0]&& results[0].sodium_mg}</h1><span ><h4 style={{ color: '#343434' }} >mg of Sodium</h4></span></GridItem>
      <GridItem><h1 style={{ color: 'cadetblue' }}>{results[0]&& results[0].sugar_g}</h1><span ><h5 style={{ color: '#343434' }} >Grams of Sugar </h5></span></GridItem>
      <GridItem><h1 style={{ color: 'crimson	' }}>{36}</h1><span ><h6 style={{ color: '#343434' }} >Grams of Sugar: Daily Recommendation</h6></span></GridItem>
    </GridContainer>
        </div>
      ): <b>Results: n/a</b>}
    </div>
  );
}

export default NutritionSearch;
