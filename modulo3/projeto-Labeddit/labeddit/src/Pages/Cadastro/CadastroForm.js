import React from 'react';
import { CadastroContainer,ButtonDiv } from './Styled';
import { TextField, Button  } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import useForm from '../../Components/Hooks/useForm';
//import {useUnprotectedPage} from '../../Components/Hooks/useUnprotectedPage';
import {signup} from '../../Service/User'
import { useNavigate } from 'react-router-dom';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const CadastroForm = () => {
    //useUnprotectedPage()
  
    const [form, onChange, clear] = useForm({ username:"" , email: "", password: "" })
    const navigate = useNavigate ()

    const onSubmitForm = (event) => {
        event.preventDefault()
        signup (form, clear,navigate)
       

    }
   
    return (

      
        <CadastroContainer>
            <form onSubmit={onSubmitForm}>
      <TextField 
                 name={"username"}
                 label={"Nome"} 
                 fullWidth
                 value={form.username}
                 onChange={onChange}
                 margin='dense'
                 required
      /> 
      
      <TextField 
                 name={"email"}
                 label={"Email"} 
                 type = {"email"}
                 fullWidth
                 value={form.email}
                 onChange={onChange}
                 margin='dense'
                 required
                 />
      
      <TextField 
                 name={"password"}
                 label={"Senha"} 
                 type = {"password"}
                 fullWidth
                 value={form.password}
                 onChange={onChange}
                 margin='dense'
                 required
                 />
      
      <p>Ao continuar você concorda com nosso Contrato 
      de usúario e nossa <href Politica de privacidade/>  </p>
      
      <FormControlLabel control={<Checkbox defaultChecked size="small"/>} label="Eu concordo em receber email" />
      
      <ButtonDiv>
                
                <Button type={'submit'} 
                        variant={'contained'} 
                        color={'primary'} 
                        fullWidth
                        margin='dense'
                 > Cadastrar </Button>
                
                </ButtonDiv> 
                </form>
        </CadastroContainer>
       
     );  
}


export default CadastroForm