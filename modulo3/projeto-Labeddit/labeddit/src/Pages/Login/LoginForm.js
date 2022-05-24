import React from 'react';
import { ButtonDiv, InputContainer} from './Styled';
import { TextField, Button } from '@mui/material';
import logo from "../../Imagens/logo.png"
import { useState } from 'react';




export const LoginForm = () => {
    const [email ,setEmail] = useState ("")
    const [password ,setPassword] = useState ("")
   
    
    const handleUpdateEmail = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
      }
    
    const handleUpdatePassword = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
      }
      const handleLogin = async (event) => {
        const body = {
          email: email,
          password: password,
        }

        const response = await axios.post(`${baseUrl}/login`, body);
    

    return (


            <InputContainer>
            <img src ={logo}/> 
               
                    <TextField
                        name={"email"}
                        autocomplete="off"
                        value={email}
                        onChange={handleUpdateEmail}
                        label={"email"}
                        variant={"outlined"}
                        type={"email"}
                        fullWidth
                        margin='dense'
                        required
                        
                    />
                    <TextField
                        name={"password"}
                        value={password}
                        onChange={handleUpdatePassword}
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
                
            </InputContainer>
            
      

    );
}


export default LoginForm





//onClick={() => goToFeedPage (navigate)