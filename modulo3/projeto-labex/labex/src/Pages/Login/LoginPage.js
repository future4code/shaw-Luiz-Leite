import React from 'react';
import {LoginContainer} from "./styled"

class LoginPage extends React.Component {
    
    
    render() {
        return (
            <LoginContainer>
                <h1>Login</h1>
                <input placeholder='Email'/>
                <input placeholder='Senha'/>
                <button>Voltar</button>
                <button>Entrar</button>
            </LoginContainer>
        )
    }
}

export default LoginPage