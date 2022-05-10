import React from 'react';
import { CadastroContainer,ButtonDiv } from './Styled';
import { TextField, Button  } from '@mui/material';
import { Link } from 'react-router-dom';



export const CadastroPage = () => {
    return (

        <CadastroContainer>
      <h1> Olá, Boas vindas ao Labeddit</h1>
      <TextField label={"Nome"} /> 
      <TextField label={"Email"} type = {"email"}/>
      <TextField label={"Senha"} type = {"password"}/>
      <ButtonDiv>
                <Link to={'/feed'}>
                <Button type={'submit'} variant={'contained'} color={'primary'} > Cadastrar </Button>
                </Link>
                </ButtonDiv> 
        </CadastroContainer>
       
     );  
}


export default CadastroPage