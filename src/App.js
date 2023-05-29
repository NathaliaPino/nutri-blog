import React from "react";
import { useEffect, useState } from "react";
import './style.css';

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
      .then((resultado) => resultado.json())
      .then((json) => {
        setNutri(json);
      });
  }, []);

  return (
    <div className="container">
      <header>
        <strong>BLOG</strong>
      </header>
      {nutri.map((itens)=>{
        return(
          <article key={itens.id} className="post">
            <strong className="titulo">{itens.titulo}</strong>
            <img src={itens.capa} alt = {itens.titulo} className="capa"></img>
            <p className="subtitulo">{itens.subtitulo}
            </p>
            <button className="botao"> Acessar</button> 
        </article>)
        
        
      })}
    </div>
  );
}

export default App;
