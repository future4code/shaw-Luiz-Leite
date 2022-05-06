import React from 'react';
import {HomeContainer,ButtonDiv} from "./styled"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';






export const HomePage = () => {
   
   

        return (
            <HomeContainer>
                <h1>Labex</h1>
                <ButtonDiv>
                <Link to={'/login'}>
                <Button variant={'outlined'} color={'secondary'} >Área do administrador</Button>
                </Link>
                <Link to={'/inscricao'}>
                <Button variant={'contained'} color={'primary'} >Quero me candidatar</Button>
                </Link>
                </ButtonDiv>
            </HomeContainer>
        );
    };


export default HomePage
