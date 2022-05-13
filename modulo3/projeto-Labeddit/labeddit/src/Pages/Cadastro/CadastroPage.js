import React from 'react';
import { CadastroContainer,ButtonDiv } from './Styled';
import { TextField, Button  } from '@mui/material';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import logo from '../../Imagens/logo2.png'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const CadastroPage = () => {
  
  const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
        //login()
        

    }
    const login = () => {
        axios.post (`${BASE_URL}/users/signup`, form)
        .then ((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
    })
        .catch((err)=>alert("Erro no login"))
    }
    
    return (

      
        <CadastroContainer>
      <h1> Olá, Boas vindas ao Labeddit</h1>
            <img src={logo}/>
      <TextField label={"Nome"} 
                 fullWidth
                 margin='dense'
                 required
      /> 
      
      <TextField label={"Email"} 
                 type = {"email"}
                 fullWidth
                 margin='dense'
                 required
                 />
      
      <TextField label={"Senha"} 
                 type = {"password"}
                 fullWidth
                 margin='dense'
                 required
                 />
      
      <p>Ao continuar você concorda com nosso Contrato 
      de usúario e nossa <href Politica de privacidade/>  </p>
      
      <FormControlLabel control={<Checkbox defaultChecked size="small"/>} label="Eu concordo em receber email" />
      
      <ButtonDiv>
                <Link to={'/feed'}>
                <Button type={'submit'} 
                        variant={'contained'} 
                        color={'primary'} 
                        fullWidth
                        margin='dense'
                 > Cadastrar </Button>
                </Link>
                </ButtonDiv> 
        
        </CadastroContainer>
       
     );  
}


export default CadastroPage