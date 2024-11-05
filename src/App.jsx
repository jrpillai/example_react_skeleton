import { createRoot } from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import PokemonImages from './PokemonImages';
import './style2.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10') // Fetch the first 10 Pokémon
      .then((response) => {
        console.log('Fetched response inside useEffect', response);
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data inside useEffect', data);
        setPokemon(data.results); // Set the Pokémon in state
      })
      .catch((error) => console.error('Error fetching Pokémon:', error));
  }, []);

  return (
    <div>
      <h1>First 10 Pokémon</h1>
      <div className="pokemon-container">
        <PokemonList pokemon={pokemon} />
        <PokemonImages pokemon={pokemon} />
      </div>
    </div>
  );
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);

export default App;
