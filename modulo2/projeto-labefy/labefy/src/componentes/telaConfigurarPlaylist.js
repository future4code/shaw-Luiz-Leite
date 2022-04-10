import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CardUsuario = styled.div`
 border: 1 px solid black;
 padding: 10 px;
 margin: 10 px;

`
const Main = styled.div`
background-color: silver;
font-family: sans-serif;
text-align:left;
height: 100vh;
box-sizing: border-box;
width: 300px;
display: flex;
flex-direction: column;

button {
    border-radius: 5px;
    background-color: #f2f2f2;
    border: 1px solid black;
    height: 30px;
    transition: transform 0.3s;
    color: red;
    :hover {
      background-color: black;
      color: white;
    }
    :active {
    background-color: gray;
    color: white;
  }
  input {
    width: 140px;
    border-radius: 5px;
    border: 1px solid black;
    height: 16px;
    
  }
}
`
const MainContainer = styled.div`
header {
  display: flex;
  background-color: black;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  grid-column: 1/-1;

  }
  footer {
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  height: 80px;
  grid-column: 1/-1;
  }
`
export default class TelaConfigurarPlaylist extends React.Component {

  state = {
    usuarios: []
  }

  componentDidMount() {
    this.pegarListas()
  }

  pegarListas = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    axios.get(url, {
      headers: {
        Authorization: "luiz-shaw"
      }
    })

      .then((res) => {
        alert("Playlist cadastrada com sucesso!")
        this.setState({ usuarios: res.data })
      })
      /*.catch((err) => {
        alert("ocorreu um problema, tente novamente")
      })*/
    /*console.log(this.state)*/

  }



  render() {

    const listaUsuarios = this.state.usuarios.map((user) => {
      return <CardUsuario>{user.nome}</CardUsuario>
    })
    return (
      <MainContainer>
      <header>Labefy</header>
      <Main>
        <h2>Labefy</h2>
        {listaUsuarios}
        <button onClick={this.props.irParaCriar}>Criar Playlist</button>
        <p>Procurar Playlist</p>
        <input placeholder='' />
        <button>Editar</button>
        <button>Salvar</button>
        <footer>labefy</footer>
      </Main>
      <footer>labefy</footer>
      </MainContainer>
    );
  }

}