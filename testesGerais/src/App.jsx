import './App.css'

function App() {

  function tratarClique(e){
    console.log(e) // envia todo o evento mapeado
    console.log(e.target); // envia o elemento alvo do clique
    console.log(e.target.className); // envia a classe (className) do elemento alvo do clique
  }

  return (
    <>
      <button onClick={tratarClique} className='btEvento'>
        Clica
      </button>
    </>
  )
}

export default App
