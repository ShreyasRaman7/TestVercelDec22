import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function Pokemon() {
  const [type, setType] = useState('');
  const [results, setResults] = useState([]);
  const [pokemonData, setPokemonData] = useState({});
  const blueGradient = 'linear-gradient(to right, #a8e9ff, #66b3ff)';
  const redOrangeGradient = 'linear-gradient(to right, #ff944d, #ff5e62)';


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await response.json();
      setResults(data.pokemon);
    }
    if (type) {
      fetchData();
    }
  }, [type]);

  useEffect(() => {
    async function fetchPokemonData(url, name) {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonData(prevData => ({ ...prevData, [name]: data }));
    }
    results.forEach(result => {
      fetchPokemonData(result.pokemon.url, result.pokemon.name);
    });
  }, [results]);

  return (
    <div>
        <div style={{ height:'1000px', width:'100%', background: type === 'fire'
      ? 'linear-gradient(to right, red, orange)'
      : type === 'water'
      ? 'linear-gradient(to right, blue, lightblue)'
      : type === 'grass'
      ? 'linear-gradient(to right, green, yellow)'
      : 'white' }}>
      <form>
        <label htmlFor="type-input">Type:</label>
        <input
          id="type-input"
          value={type}
          onChange={event => setType(event.target.value)}
        />
      </form>

      {/* {results.map(result => (
        <div key={result.pokemon.name}>
          <h2>{result.pokemon.name}</h2>
          {pokemonData[result.pokemon.name] && (
            <div>
                {console.log(pokemonData[result.pokemon.name])} 
              <p>Weight: {pokemonData[result.pokemon.name].weight}</p>
              <p>Height: {pokemonData[result.pokemon.name].height}</p>
              <p>Base experience: {pokemonData[result.pokemon.name].base_experience}</p>
            </div>
          )}
        </div>
      ))} */}

<div>
          
          {/* <img src='https://i.ibb.co/BtMCmxJ/abductors.png' alt='abductors' /> */}
         


           {/* <span style={{ borderRadius:'2px', margin:'0 10px' ,outline: '.02px solid black',boxShadow:'4px 4px 8px 0px rgba(0,0,0,0.75)', color: 'black', backgroundColor: 'aliceblue' }}>Difficulty Color Code: </span> <span style={{margin:'0 10px' ,outline: '2px solid black',boxShadow:'4px 4px 8px 0px rgba(0,0,0,0.75)', color: 'black', backgroundColor: 'lightgoldenrodyellow' }}>Beginner </span> <span style={{margin:'0 10px' ,outline: '2px solid black',boxShadow:'4px 4px 8px 0px rgba(0,0,0,0.75)', color: 'black', backgroundColor: 'palegreen' }}>Intermediate </span><span style={{margin:'0 10px' ,outline: '2px solid black',boxShadow:'4px 4px 8px 0px rgba(0,0,0,0.75)', color: 'black', backgroundColor: 'lightpink' }}>Expert </span> */}
          <p></p>
          <Box sx={{ width: '100%',  bgcolor: 'background.paper' }}>
    <List style={{padding: '10px', color:'#0047AB', borderRadius: '5px'  }}>
    
      {results.map((result) => (
        <ListItem style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '10px',
            padding: '10px',
          }} key={result.pokemon.name}>   
         <div className="pokemon-info">
  <h2 style={{ color:'black'  }}>{result.pokemon.name.charAt(0).toUpperCase() + result.pokemon.name.slice(1)}</h2> 
  {pokemonData[result.pokemon.name] && <p>Weight: {pokemonData[result.pokemon.name].weight}</p>} 
  {pokemonData[result.pokemon.name] &&  <p>Height: {pokemonData[result.pokemon.name].height}</p>}
  {pokemonData[result.pokemon.name] && <p>Base experience: {pokemonData[result.pokemon.name].base_experience}</p>}
  <>  <h6 style={{color: 'gray'}}>                   </h6>   </>
</div>
          
         
          <PopupState variant="popover" popupId="demo-popup-menu" anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
          Click→Details
          </Button>
          <Menu {...bindMenu(popupState)}>
            {/* {pokemonData[result.pokemon.name]} */}
            {/* {console.log(pokemonData[result.pokemon.name].moves)} */}
            
            <MenuItem onClick={popupState.close}> <h4>
    {pokemonData[result.pokemon.name] && 
      <p> <h2>Moves: </h2>
        {/* {pokemonData[result.pokemon.name] && pokemonData[result.pokemon.name].moves[0].name} */}
        {Object.values(pokemonData[result.pokemon.name].moves).map((move, y) => (
          <li key={y}>
            {console.log('move: ',move.move.name)}
            {move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1)}
            
          </li>
        ))}
      </p>
    }
  </h4>   </MenuItem>
            
            <MenuItem onClick={popupState.close}><> </> <div style={{ maxHeight: '200px', overflowX: 'hidden', overflowY: 'scroll' }}>
            <div style={{ maxHeight: '200px', overflowY: 'scroll' }}>
            <h4>{result.instructions}</h4>
          </div>
          </div>
          
          </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>

           </ListItem>
        
        
      ))}
    </List>
    </Box>
        </div>
      

    </div>
    </div>
  );
}

export default Pokemon;
