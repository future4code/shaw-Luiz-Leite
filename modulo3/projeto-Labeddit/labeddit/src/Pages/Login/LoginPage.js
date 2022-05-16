import React from 'react';
import { LoginContainer, ButtonDivCadastro } from './Styled';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';


export const LoginPage = () => {
   
    return (

        <LoginContainer> 
           <LoginForm/>
           <br/>
            <ButtonDivCadastro>
                <Link to={'/cadastro'}>
                    <Button
                        fullWidth
                        margin='dense'
                        type={'submit'}
                        variant={'contained'}
                        color={'primary'}
                                  >
                        Criar uma Conta</Button>
                </Link>
            </ButtonDivCadastro>
        </LoginContainer>

    );
}


export default LoginPage