import React from 'react';
import { ButtonDiv, InputContainer} from './Styled';
import { TextField, Button } from '@mui/material';
import useForm from '../../Components/Hooks/useForm';
import logo from "../../Imagens/logo.png"
import { login } from '../../Service/User';
import { useNavigate } from 'react-router-dom';
import {useUnprotectedPage} from '../../Components/Hooks/useUnprotectedPage'



export const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const navigate = useNavigate ()
    useUnprotectedPage()


    const onSubmitForm = (event) => {
        event.preventDefault()
        login (form, clear, navigate)
        
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
                    <br/>
                    <br/>
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





//onClick={() => goToFeedPage (navigate)