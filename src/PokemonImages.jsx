import React, { useState, useEffect } from 'react';

function PokemonImages({ pokemon }) {
  const [sprites, setSprites] = useState({});
  const [textColor, setTextColor] = useState('black');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextColor((prevColor) => (prevColor === 'black' ? 'white' : 'black'));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  //   useEffect(() => {
  //     console.log('Runs on every render');
  //   });

  const fetchAllSprites = () => {
    const promises = pokemon.map((poke) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
        .then((response) => response.json())
        .then((data) => ({
          name: poke.name,
          sprite: data.sprites.front_default,
        }))
    );

    Promise.all(promises)
      .then((results) => {
        const newSprites = {};
        results.forEach(({ name, sprite }) => {
          newSprites[name] = sprite;
        });
        setSprites(newSprites);
      })
      .catch((error) =>
        console.error('Error fetching Pokémon sprites:', error)
      );
  };

  const pokemonListItems = pokemon.map((poke, index) => (
    <div key={index} style={{ textAlign: 'center', margin: '10px' }}>
      <p>{poke.name}</p>
      {sprites[poke.name] && (
        <img
          src={sprites[poke.name]}
          alt={poke.name}
          style={{ width: '100px', height: '100px' }}
        />
      )}
    </div>
  ));

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={fetchAllSprites} style={{ color: textColor }}>
        Show All Images
      </button>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          border: '2px solid black',
          padding: '10px',
          marginTop: '20px',
        }}
      >
        {pokemonListItems}
      </div>
    </div>
  );
}

export default PokemonImages;
