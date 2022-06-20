import axios from "axios";
import React from "react";


export default class TelaCadastro extends React.Component {

state = {
    nome:"",
    email:""
}
hendleNome = (event) => {
    this.setState({nome:event.target.value})

}
hendleEmail = (event) => {
    this.setState({nome:event.target.value})

}

fazerCadastro = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body={
        name:this.state.nome,
        email:this.state.email
    }

    axios.post(url, body, {
        headers: {
            Authorization: "luiz-shaw"
        }
    })
    
    .then ((res) => {
        alert("Usuario(a) cadastrado (a) com sucesso!")
        this.setState({nome:"", email:""})
    })
    .catch((err) => {
        console.log(err.response.data)
    })


}


    render(){
        return(
            <div>
            <button onClick={this.props.irParaLista}>Ir para Lista de usuarios</button>
                <h2>Cadastro</h2>
                <input placeholder="nome"
                    value={this.state.name}
                    onChange={this.handleNome}
                />
                <input placeholder="email"
                    value={this.state.name}
                    onChange={this.handleEmail}
                />
                <button onClick={this.fazerCadastro}>cadastrar</button>
            </div>
        )
    }

}