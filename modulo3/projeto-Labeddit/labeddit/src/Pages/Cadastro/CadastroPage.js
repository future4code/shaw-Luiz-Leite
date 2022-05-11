import React from 'react';
import { CadastroContainer,ButtonDiv } from './Styled';
import { TextField, Button  } from '@mui/material';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const CadastroPage = () => {
    return (

      
        <CadastroContainer>
      <h1> Olá, Boas vindas ao Labeddit</h1>
      <TextField label={"Nome"} /> 
      <TextField label={"Email"} type = {"email"}/>
      <TextField label={"Senha"} type = {"password"}/>
      <p>Ao continuar você concorda com nosso Contrato 
      de usúario e nossa <href Politica de privacidade/>  </p>
      <FormControlLabel control={<Checkbox defaultChecked size="small"/>} label="Eu concordo em receber email" />
      <ButtonDiv>
                <Link to={'/feed'}>
                <Button type={'submit'} variant={'contained'} color={'primary'} > Cadastrar </Button>
                </Link>
                </ButtonDiv> 
        </CadastroContainer>
       
     );  
}


export default CadastroPage