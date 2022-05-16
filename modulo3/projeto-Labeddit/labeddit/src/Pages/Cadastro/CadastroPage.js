import React from 'react';
import { CadastroContainer } from './Styled';
import logo from '../../Imagens/logo2.png'
import { CadastroForm } from './CadastroForm';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const CadastroPage = () => {
  
 
    
    return (

      
        <CadastroContainer>
      <h1> Olá, Boas Vindas ao Labeddit!!</h1>
            <img src={logo}/>
            <CadastroForm/>
        </CadastroContainer>
       
     );  
}


export default CadastroPage