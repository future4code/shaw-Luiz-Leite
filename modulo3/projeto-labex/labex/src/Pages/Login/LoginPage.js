import React from 'react';
import {LoginContainer,ButtonDiv} from "./styled";
import { TextField, Button , Link } from '@mui/material';



export const LoginPage = () => {
    
    
     {
        return (
            <LoginContainer>
                <h1>Login</h1>
                
                <TextField label={"Email"} type = {"email"}/> 
                <TextField label={"Senha"} type = {"password"}/>
               
                <ButtonDiv>
                <Button type={'submit'} variant={'contained'} color={'primary'} > Entrar </Button>
                <Link to={''}>
                <Button variant={'contained'} color={'secondary'} >Voltar</Button>
                </Link>
                </ButtonDiv> 
            </LoginContainer>
        )
    }
}

export default LoginPage