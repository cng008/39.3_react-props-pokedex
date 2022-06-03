import React from 'react';
import Pokecard from './Pokecard';
import { image } from './PokemonData';
import './Pokedex.css';

const Pokedex = props => {
  let winMessage = null;
  if (props.isWinner) {
    winMessage = <p className="Pokedex-winner">THIS HAND WINS!</p>;
  }
  return (
    <div className="Pokedex">
      <div className="Pokedex-cards">
        {props.pokemon.map(p => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
            image={image(p.id)}
          />
        ))}
      </div>
      <h4>Total experience: {props.exp}</h4>
      {winMessage}
    </div>
  );
};

export default Pokedex;
