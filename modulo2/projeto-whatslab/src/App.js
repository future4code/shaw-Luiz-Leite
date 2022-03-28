import React from 'react';
import styled from 'styled-components';
import { InputHTMLAttributes } from 'react';


const MainContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const Containerwhats = styled.div`
border: 1px solid black;
background-color: white;
width: 400px;
height: 100vh;
align-items: center;
justify-content: space-between;
flex-direction: column;
border-radius: 10 px;

`
const Chat = styled.div`
width:100%;
display: flex;
justify-content: flex-start;
flex-direction: column-reverse;
text-align: flex-start;
height: 80vh;

p{
  padding: 0 15px;
}

`
const Inputs = styled.div`
width: 100%;
justify-content: space-between;

.input1{
  width: 20%;
  border:2px solid black;
  border-radius: 4px;
  padding: 6px 5px;
}
.input2{
  width: 60%;
  border:2px solid black;
  border-radius: 3px;
  padding: 6px 5px;
}
button{
  width: 20%;
  border: 3px solid black;
  border-radius:15px;
}


`

/*class App extends React.Component {
  state = {
    chat: [],
    inputNome: "",
    inputComentario: "",
  }
}
adicionarComentario = () => {

  const novoComentario = {
    nome: this.state.inputNome,
    comentario: this.state.inputComentario
  };
  const novaListaChat = [...this.state.chat, novoComentario];
  this.setState({ chat: novaListaChat });
  this.setState({ inputNome: "" });
  this.setState({ inputCometario: "" });
};

onChangeInputNome = (event) => {
  this.setState({ inputNome: event.target.value });
};
onChangeInputComentario = (event) => {
  this.setState({ inputComentario: event.target.value });
};

const menssagem = this.state.chat.map((menssagem)) => {
  return (<p> {menssagem.nome} - {menssagem.cometario} </p>
  )
})*/

function App(){

  return (
    <MainContainer>
      <Containerwhats>
        <h1>whatsapp</h1>
        <Chat>
        <p>mensssagens</p>
        </Chat>   
        <Inputs>
        <input className='input1'
            value={this.state.inputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />
          <input className='input2'
            value={this.state.inputComentario}
            onChange={this.onChangeInputComentario}
            placeholder={"Menssagem"}
          />
          <button onClick={this.adicionarComentario}>Enviar</button>
        </Inputs>
      </Containerwhats>
    </MainContainer>
  );
}
export default App;



/*<Chat>
{listachat}
</Chat>*/

/*<Inputs>
          <input className='input1'
            value={this.state.inputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />
          <input className='input2'
            value={this.state.inputComentario}
            onChange={this.onChangeInputComentario}
            placeholder={"Menssagem"}
          />
          <button onClick={this.adicionarComentario}>Enviar</button>
        </Inputs>*/

