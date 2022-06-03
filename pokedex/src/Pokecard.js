import React from 'react';
import './Pokecard.css';

/** Individual Pokemon card. */

const Pokecard = ({ name, type, exp, image }) => {
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-name">{name}</h1>
      <img className="Pokecard-image" src={image} alt="" />
      <p className="Pokecard-data">Type: {type}</p>
      <p className="Pokecard-data">EXP: {exp}</p>
    </div>
  );
};

export default Pokecard;
