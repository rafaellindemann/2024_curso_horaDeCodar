import React, { useState, useEffect } from 'react';

function ExemploUseEffect() {
  const [personagem, setPersonagem] = useState(null);

  useEffect(() => {
    // Código para buscar um personagem da Marvel da API
    // Exemplo fictício:
    const personagemAleatorio = Math.floor(Math.random() * 100) + 1;
    fetch(`https://api.marvel.com/characters/${personagemAleatorio}`)
      .then(response => response.json())
      .then(data => setPersonagem(data));
  }, []); // Array de dependências vazio significa que o efeito será executado apenas uma vez, após a montagem do componente

  return (
    <div>
      {personagem ? (
        <div>
          <h2>{personagem.name}</h2>
          <img src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`} alt={personagem.name} />
          <p>{personagem.description}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default ExemploUseEffect;
