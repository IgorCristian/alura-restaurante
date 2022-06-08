import { useEffect, useState } from 'react';
import './App.css'
import Prato from './componentes/Prato';

function App() {

  const [pratos, setPratos] = useState([])

  useEffect(() => {
    fetch('https://alura-pizza-igor.herokuapp.com/api/pratos/')
      .then(resposta => resposta.json())
      .then(dados => {
        setPratos(dados)
      })
  }, [])

  return (
    <div className="App">
      <div className="banner-container" >
        <img src="/imagens/banner.png" alt="Banner da alura-restaurante" />
      </div>
      <div className="logo-container">
        <img src="/imagens/logo.png" alt="Logo da alura-restaurante" />
      </div>
      <section className='cardapio'>
        {pratos.map(prato =>
        (<Prato
          key={prato.id}
          nome={prato.nome}
          descricao={prato.descricao}
          imagem={prato.img}
          preco={prato.preco} />))}
      </section>
    </div>
  );
}

export default App;
