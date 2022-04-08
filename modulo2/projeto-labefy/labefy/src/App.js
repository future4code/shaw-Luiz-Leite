import React from 'react';
import TelaConfigurarPlaylist from './componentes/telaConfigurarPlaylist';
import TelaCriarPlalist from './componentes/telaCriarPlayslist';
import styled from 'styled-components';

const  div = styled.div`
  font-family: sans-serif;
  text-align: center;
  `





export default class App extends React.Component{

state= {
  telaAtual:"criar playlist"
}

escolheTela = () => {
  switch (this.state.telaAtual){
    case "criar playlist":
      return <TelaCriarPlalist irParaEditar = {this.irParaEditar}/>
      case "editar playlist":
      return <TelaConfigurarPlaylist irParaCriar = {this.irParaCriar}/>
      default:
        return <div>ERRO! PÁGINA NÃO ENCONTRADA</div>
  }
}
irParaCriar = () => {
  this.setState ({telaAtual: "criar playlist"})

}
irParaEditar = () => {
  this.setState ({telaAtual: "editar playlist"})


}
  
  render(){
  return (
    <div>
      {this.escolheTela()}
    </div>
  );
}

}
