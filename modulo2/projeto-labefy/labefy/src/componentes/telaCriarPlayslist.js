import React from 'react';
import styled from 'styled-components';

const  h2 = styled.div`
  font-family: sans-serif;
  text-align: center;
  `


export default class TelaCriarPlalist extends React.Component{
  
  render(){
  return (
    <div>
      <h2>Labefy</h2>
      <button onClick={this.props.irParaEditar}>Ir para playlist</button>
      <input placeholder='nome da playlist'/>
      <input placeholder='Estilo musical'/>
      <button>Criar Playlist</button>
    </div>
  );
}

}




/*<PerguntaOpcoes
          pergunta={"4. Qual o genero de sua playlist"}
          opcoes={[
            "rock",
            "jazz",
            "samba",
            "sertanejo",
            "eletronica",
            "mpb",
            "funk",
            "axé",
          ]}*/