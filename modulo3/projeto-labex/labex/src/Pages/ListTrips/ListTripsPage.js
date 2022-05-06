import React from 'react';
import { ListaContainer } from "./styled"
import {Link , Button}from "@mui/material"


export const ListaTrip = () => {


    return (
        <ListaContainer>
            <h1>Lista de Viagens</h1>
            
            <Link to={"/viagem/criar"}>
            <Button variant={'contained'} color={'primary'} >Criar Viagem</Button>
            </Link>
            
            <Link>
            <Button variant={'outlined'} color={'secondary'} >Voltar</Button>
            </Link>
            <ListItemButton component="a" href="#simple-list">
             <ListItemText primary="Spam" />
             </ListItemButton>
           
        </ListaContainer>
    )

}

export default ListaTrip