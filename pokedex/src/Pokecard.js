import React from 'react';
import './Pokecard.css';

/** Individual Pokemon card. */

const Pokecard = ({ name, type, exp, image }) => {
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-name">{name}</h1>
      <img src={image} />
      <p className="Pokecard-p">Type: {type}</p>
      <p className="Pokecard-p">EXP: {exp}</p>
    </div>
  );
};

export default Pokecard;
