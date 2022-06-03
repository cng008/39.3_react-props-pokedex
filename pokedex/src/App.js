import React from 'react';
import { Pokedex, image } from './Pokedex';
import Pokecard from './Pokecard';
import './App.css';

const App = () => (
  <>
    {Pokedex.map(p => (
      <Pokecard
        id={p.id}
        name={p.name}
        type={p.type}
        exp={p.base_experience}
        image={image(p.id)}
      />
    ))}
  </>
);

export default App;
