import React from 'react'; // not required React 17+, used to be needed for the JSX transformation
import { useEffect } from 'react';

function PokemonList(props) {
  // Destructure `pokemon` from `props`
  const pokemon = props.pokemon;
  console.log('pokemon state: ', pokemon);

  useEffect(() => {
    console.log('Runs only once on mount');
  }, []);

  // Compute the list items outside of the JSX
  const pokemonListItems = pokemon.map((pokemon, index) => (
    <li key={index}>{pokemon.name}</li>
  ));

  console.log('PokemonList: ', pokemonListItems);

  return <ul>{pokemonListItems}</ul>;
}

export default PokemonList;
