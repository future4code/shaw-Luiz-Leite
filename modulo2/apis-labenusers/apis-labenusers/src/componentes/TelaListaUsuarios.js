import React from "react";
import axios from "axios";
import styled from "styled-components";


const CardUsuario = styled.div`
 border: 1 px solid black;
 padding: 10 px;
 margin: 10 px;
`



export default class TelaListaUsuarios extends React.Component {

    state = {
        usuarios:[]
    }

    componentDidMount (){
        this.pegarUsuarios()

    }

pegarUsuarios = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    

    axios.get(url,{
        headers: {
            Authorization: "luiz-shaw"
        }
    })
    
    .then ((res) => {
        this.setState({usuarios: tes.data})
    })
    .catch((err) => {
        alert("ocorreu um problema tente novamente")
    })
}


    render(){
        console.log (this.state.usuarios)
        const listaUsuarios = this.state.usuarios.map ((user) => {
        return <CardUsuario>{user.name}</CardUsuario>
    })
        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuarios</h2>
                {listaUsuario}
            </div>
        )
    }

}