import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


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
  font-family: sans-serif;
  }
`







export default class TelaCriarPlalist extends React.Component {

  state = {
    nomePlay: "",
    nomeMusica: "",
    nomeArtista: ""


  }

  hendleNomePlay = (event) => {
    this.setState({ nomePlay: event.target.value })
  }
  hendleNomeMusica = (event) => {
    this.setState({ nomeMusica: event.target.value })

  }
  hendleNomeArtista = (event) => {
    this.setState({ nomeArtista: event.target.value })

  }

  criarPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.nome,

    }
    axios.post(url, body, {
      headers: {
        Authorization: "luiz-shaw"
      }
    })

      .then((res) => {
        alert("Usuario cadastrado com sucesso!")
        this.setState({ nomePlay: '', nomeArtista: '', nomeMusica: "" })
      })
      .catch((err) => {
        alert(err.response.data)
      })
    console.log(this.state)

  }

  render() {
    return (
      
      <MainContainer>
        <header>Labefy</header>
        <Main>
        <h2>Labefy</h2>
        <button onClick={this.props.irParaEditar}>Ir para playlist</button>
        <input placeholder={'nome da playlist'}
          value={this.state.nomePlay}
          onChange={this.hendleNomePlay}
        />
        <input placeholder='nome da musica'
          value={this.state.nomeMusica}
          onChange={this.hendleNomeMusica} />
        <input placeholder='nome do artista'
          value={this.state.nomeArtista}
          onChange={this.hendleNomeArtista}
        />
        <select><option>rock</option>
          <option>samba</option>
          <option>funk</option>
          <option>hiphop</option>
          <option>jazz</option>
          <option>pagode</option>
          <option>sertanejo</option>
          <option>mpb</option>
          <option>eletronica</option>
          <option>pop</option></select>
        <button onClick={this.criarPlaylist}>Criar Playlist</button>
        </Main>
        <footer>Labefy</footer>
      </MainContainer>
     
    );
  }

}




