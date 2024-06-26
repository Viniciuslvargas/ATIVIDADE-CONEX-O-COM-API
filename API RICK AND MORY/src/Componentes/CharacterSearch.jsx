import React, { useState } from 'react';

const CharacterSearch = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleSearch = () => {
    onSearch(name);
  };

  return (
    <div id='pesquisa'>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite o nome do personagem"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default CharacterSearch;