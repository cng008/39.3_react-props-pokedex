import React from 'react';
import { Pokedex, image } from './Pokedex';
import Pokecard from './Pokecard';
import './App.css';

const App = () => (
  <>
    <div className="App">
      <h2 className="App-title">Pokedex</h2>
      <div className="App-cards">
        {Pokedex.map(p => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
            image={image(p.id)}
          />
        ))}
      </div>
    </div>
  </>
);

export default App;
