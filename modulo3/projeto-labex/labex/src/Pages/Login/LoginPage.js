import React from 'react';
import {LoginContainer} from "./styled"
import {useNavigate} from "react-router-dom"

export const LoginPage = () => {
    
    const navigate = useNavigate ()
    const goBack = (navigate) => {
        navigate (-1)
    }
    
    
     {
        return (
            <LoginContainer>
                <h1>Login</h1>
                <input placeholder='Email'/>
                <input placeholder='Senha'/>
                <button onClick={() => goBack (navigate)}>Voltar</button>
                <button>Entrar</button>
            </LoginContainer>
        )
    }
}

export default LoginPage