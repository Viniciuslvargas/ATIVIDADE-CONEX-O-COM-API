import React, { useState } from 'react';
import CharacterSearch from './Componentes/CharacterSearch'; 
import CharacterList from './Componentes/CharacterList';   

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacters = (name) => {
    setLoading(true);
    setError(null);
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results || []);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1 id='TITULO'>Busca de Personagens de Rick and Morty</h1>
      <CharacterSearch onSearch={fetchCharacters} />  
      {loading && <p>Carregando...</p>}
      {error && <p>Erro: {error.message}</p>}
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;