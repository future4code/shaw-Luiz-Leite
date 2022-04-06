import React from 'react';
import axios from 'axios';




class App extends React.Component {
  
  state = {
    messages: [],
    inputEmail: '',
    inputNome: ''
  }
  
  
  componentDidMount=() =>
  
  
  onChangeEmail = (event) => {
    this.setState ({inputEmail: event.target.value})
  }
  
  onChangeName = (event) => {
    this.setState ({inputName: event.target.value})
  }
  
  createMessagens = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }
    const headers = {
      headers: {
        Authorization: "luiz-shaw"
      }
    };
    /*const getAllPlaylists = () => {
      const url =
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
        axios
    .post(url, body, headers)
    .then((res) => {
      //Aqui é a resposta da função caso dê tudo certo
      console.log(res.data);
    })
    .catch((err) => {
      //Aqui é a resposta da função caso dê errado
      console.log(err.response.data);
    });
};
getAllPlaylists();
postPlaylist("Forroo");*/


getUser = () => {
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users?=77374f2e-d9dc-4343-89f9-dc8d60b0ad89"
  axios.get(url,headers)
  .them((resposta)=> {
    this.setState ({
      user:resposta.data
    })
  })
}
deletUser = (id) => {
  const url = ""
  axios.delete(url,headers)
  this.getUser ()
  
}

    
  
  
  render() {
    
    
    
    return (
      <div>
        <label>
        Email
        <button onClick={this.sendMessage}>Trocar de tela</button>
        <input
          placeholder="luiz_marccello@hotmail.com"
          value={this.state.inputEmail}
          onChange={this.onChange}
        />
        </label>
        <label>
          nome:
          <input
          placeholder="luiz_marccello@hotmail.com"
          value={this.state.inputNome}
          onChange={this.onChange}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.createMessagens()
            }
          }}
          />
        </label>
        <button onClick={this.sendMessage}>Criar Usuario</button>
      </div>
    );
  }
}

export default App;


