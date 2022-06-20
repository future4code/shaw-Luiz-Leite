import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

/*class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/152'}
        />
        <Post
          nomeUsuario={'Luiz Marcelo'}
          fotoUsuario={'https://picsum.photos/50/45'}
          fotoPost={'https://picsum.photos/200/135'}
        />
        <Post
          nomeUsuario={'Labenu'}
          fotoUsuario={'https://picsum.photos/50/40'}
          fotoPost={'https://picsum.photos/200/148'}
        />
      </MainContainer>
      
    );
  }
}

export default App;*/



class App extends React.Component {
  state = {
    pessoas:[
      {
    nomeUsuario:"paulinha",
    fotoUsuario:"https://picsum.photos/50/50",
    fotoPost:"https://picsum.photos/200/152"
  },
   {
    nomeUsuario:"Luiz Marcelo",
    fotoUsuario:"https://picsum.photos/50/45",
    fotoPost:"https://picsum.photos/200/135"
  },
  {
    nomeUsuario:"Labenu",
    fotoUsuario:"https://picsum.photos/50/40",
    fotoPost:"https://picsum.photos/200/148"
  }
],   
    valorInputnomeUsuario: "",
    valorInputfotoUsuario: "",
    valorInputfotoPost: ""
};


render() {
 
  const listaDeComponentes = this.state.pessoas.map((pessoa) => {
    
    return (
      <Post
        nomeUsuario ={pessoa.nomeUsuario}
        fotoUsuario = {pessoa.fotoUsuario} 
        fotoPost = {pessoa.fotoPost}
      />
    )
  })

  
return (
    <MainContainer>
      {listaDeComponentes}
      <div>
          <input
            value={this.state.valor}
            onChange={this.onChangenomeUsuario}
            placeholder={""}
          />
          <input
            value={this.state.valor}
            onChange={this.onChangefotoUsuario}
            placeholder={""}
          />
          <input
            value={this.state.valor}
            onChange={this.onChangefotoUsuario}
            placeholder={""}
          />
          <button onClick={this.adicionaPessoa}>Adicionar</button>
        </div>
        
    </MainContainer>
  );
  }}
  export default App;
