import React from 'react';
import { LoginContainer , ButtonDiv, LogoContainer} from './Styled';
import { TextField, Button  } from '@mui/material';
import logo from '../../Imagens/logo.png'
import { Link } from 'react-router-dom';


export const LoginPage = () => {
    
    return (

        <LoginContainer>
        <h1>Labeddit</h1>
        <LogoContainer src={logo}/>
        <TextField label={"Nome"} /> 
                <TextField label={"Senha"} type = {"password"}/>

                <ButtonDiv>
                <Link to={'/feed'}>
                <Button type={'submit'} variant={'contained'} color={'primary'} > Continuar </Button>
                </Link>
                <Link to={'/cadastro'}>
                <Button variant={'contained'} color={'secondary'} >Criar uma Conta</Button>
                </Link>
                </ButtonDiv> 
        </LoginContainer>
       
     );
}


export default LoginPage