import React from 'react';

const Pokecard = ({ name, type, exp, image }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} />
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
    </div>
  );
};

export default Pokecard;
