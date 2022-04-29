import React, {useState} from 'react';
import {LoginContainer} from "./styled"
import {useNavigate} from "react-router-dom"
import axios from 'axios';

export const LoginPage = () => {
    
    const navigate = useNavigate ()
    const goBack = (navigate) => {
        navigate (-1)
    }
    const [email,setEmail] = useState ("");
    const [passworld,setPassworld] = useState ("");

    const onChangeEmail = (event) => {
        setEmail (event.target.value);

    };

    const onChangePassworld = (event) => {
        setPassworld (event.target.value);

    };

    const onSubmitlogin = () => {
        console.log (email,passworld)
        
        const body = {
            email:email,
            passworld:passworld


        }
        axios.post ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-shaw/login",body)
        .then ((response) =>{
            console.log ('sucesso', response.data.token)
            localStorage.setItem ('token',response.data.token)
        }).catch ((error) => {
            console.log ("senha ou email incorreto", error.data)
        })
    
    
    
    };
        
       
     {
        return (
            <LoginContainer>
                <h1>Login</h1>
                <input 
                placeholder='Email'
                value={email}
                onChange={onChangeEmail}
                />
                <input 
                placeholder='Senha'
                value={passworld}
                onChange={onChangePassworld}
                />
                <button onClick={() => goBack (navigate)}>Voltar</button>
                <button onClick={onSubmitlogin}>Entrar</button>
            </LoginContainer>
        )
    }
}

export default LoginPage