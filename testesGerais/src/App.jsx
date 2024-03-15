// import React, { useState, useEffect } from 'react';

// function ExemploUseEffect() {
//   const [personagem, setPersonagem] = useState(null);

//   useEffect(() => {
//     // Código para buscar um personagem da Marvel da API
//     // Exemplo fictício:
//     const personagemAleatorio = Math.floor(Math.random() * 100) + 1;
//     fetch(`https://api.marvel.com/characters/${personagemAleatorio}`)
//       .then(response => response.json())
//       .then(data => setPersonagem(data));
//   }, []); // Array de dependências vazio significa que o efeito será executado apenas uma vez, após a montagem do componente

//   return (
//     <div>
//       {personagem ? (
//         <div>
//           <h2>{personagem.name}</h2>
//           <img src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`} alt={personagem.name} />
//           <p>{personagem.description}</p>
//         </div>
//       ) : (
//         <p>Carregando...</p>
//       )}
//     </div>
//   );
// }

// export default ExemploUseEffect;

import React, { useState, useEffect } from 'react';

function ListaDeCompras() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const listaSalva = localStorage.getItem('listaDeCompras');
    if (listaSalva) {
      setLista(JSON.parse(listaSalva));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('listaDeCompras', JSON.stringify(lista));
  }, [lista]);

  const adicionarItem = () => {
    if (item.trim() !== '') {
      setLista([...lista, item]);
      setItem('');
    }
  };

  const removerItem = (index) => {
    const novaLista = [...lista];
    novaLista.splice(index, 1);
    setLista(novaLista);
  };

  return (
    <div>
      <h1>Lista de Compras</h1>
      <div>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Digite o item..."
        />
        <button onClick={adicionarItem}>Adicionar</button>
      </div>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removerItem(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeCompras;
