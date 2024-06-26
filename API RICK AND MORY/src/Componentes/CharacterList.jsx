import React from 'react';

const CharacterList = ({ characters }) => {
  return (
    <div id='galeria'>
      {characters.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;