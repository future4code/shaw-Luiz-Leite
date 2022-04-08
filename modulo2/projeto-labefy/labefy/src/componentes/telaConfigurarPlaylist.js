import React from 'react';
import styled from 'styled-components';

export default class TelaConfigurarPlaylist extends React.Component{
  
  render(){
  return (
    <div> 
    <h2>Labefy</h2>
      <button onClick={this.props.irParaCriar}>Criar Playlist</button>
      <p>Procurar Playlist</p>
      <input placeholder=''/>
      <button>Editar</button>
      <button>Salvar</button>
    </div>
  );
}

}