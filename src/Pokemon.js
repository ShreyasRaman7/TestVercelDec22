import React, { useState, useEffect } from 'react';

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
      {results.map(result => (
        <div key={result.pokemon.name}>
          <h2>{result.pokemon.name}</h2>
          {pokemonData[result.pokemon.name] && (
            <div>
              <p>Weight: {pokemonData[result.pokemon.name].weight}</p>
              <p>Height: {pokemonData[result.pokemon.name].height}</p>
              <p>
                Base experience: {pokemonData[result.pokemon.name].base_experience}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
}

export default Pokemon;
