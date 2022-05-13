import React from 'react';
import { ButtonDiv, InputContainer} from './Styled';
import { TextField, Button } from '@mui/material';
import useForm from '../../Components/Hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../Components/Url';
import logo from "../../Imagens/logo.png"

export const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
        //login()
        

    }
    const login = () => {
        axios.post (`${BASE_URL}/users/login`, form)
        .then ((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
    })
        .catch((err)=>alert("Erro no login"))
    }
    

    return (


            <InputContainer>
            <img src ={logo}/> 
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        autocomplete="off"
                        value={form.email}
                        onChange={onChange}
                        label={"email"}
                        variant={"outlined"}
                        type={"email"}
                        fullWidth
                        margin='dense'
                        required
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        type={"password"}
                        fullWidth
                        margin='dense'
                        required
                    />
                    <ButtonDiv>
        
                            <Button
                                fullWidth
                                margin='dense'
                                type={'submit'}
                                variant={'contained'}
                                color={'primary'}
                            >
                                Continuar </Button>
                        
                    </ButtonDiv>
                </form>
            </InputContainer>
            
      

    );
}


export default LoginForm