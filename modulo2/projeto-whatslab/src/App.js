import React from "react";
import styled from "styled-components";


const Appcontainer = styled.div`
  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
`
const InputsContainer = styled.div`
  display: flex;
`
const NameInput = styled.input`
  width: 100px;
`

const MessageInput = styled.input`
  flex-grow: 1;
`
class App extends React.Component {
  state = {
    messages: [],
    userValue: '',
    messageValue: ''
  }
  onChangeUserValue = (event) => {
    this.setState({ userValue: event.target.value })
  }

  onChangeMessageValue = (event) => {
    this.setState({ messageValue: event.target.value })
  }
  sendMessage = () => {
    const newMessage = {
      user: this.state.userValue,
      text: this.state.messageValue
    }
    const newMessagesArray = [newMessage, ...this.state.messages]

    this.setState({messages: newMessagesArray, messageValue: ''})
  }

  render() {
    return (
      <AppContainer>
        <MessagesContainer>
          <p>Whatslab</p>
          {this.state.messages.map((message, index) => {
            return <p key={index}>
              <strong>{message.user}</strong>: {message.text}
            </p>
          })}
          </MessagesContainer>
          <InputsContainer>
            <UsuarioInput 
              placeholder={"Usuario"}
              onChange={this.onChangeUserValue}
              value={this.state.userValue} />
            <MenssagemInput 
              placeholder={"Menssagem"}
              onChange={this.onChangeMessageValue}
              value={this.state.messageValue} />
              <button onClick={this.sendMessage}>Enviar</button>
          </InputsContainer>
      </AppContainer>

    );
  }
}
export default App;