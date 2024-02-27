import './App.css'

function App() {

  function renderizarUsuario(usuarioLogado){
    if(usuarioLogado){
      return <h1>Olá usuário</h1>
    }else{
      return <h1>Faça o login</h1>
    }

  }

  return (
    <>
      {renderizarUsuario(false)}
    </>
  )
}

export default App
