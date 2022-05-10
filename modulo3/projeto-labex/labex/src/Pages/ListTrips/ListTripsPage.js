import React from 'react';
import { ListaContainer , ButtonDiv } from "./styled"
import  Button  from "@mui/material/Button";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';




export const ListaTrip = () => {


    return (
        <ListaContainer>
            <h1>Lista de Viagens</h1>
            <ButtonDiv>
            <Link to={"/viagem/criar"}>
            <Button variant={'contained'} color={'primary'} >Criar Viagem</Button>
            </Link>
            <Link to={"/"} >
            <Button variant={'outlined'} color={'secondary'} >Voltar</Button>
            </Link>
            </ButtonDiv>
            
            
      
      <nav aria-label="secondary mailbox folders">
        <List>
        <Link to={"/viagens/detalhe"} >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Viagem para marte" />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to={"/viagens/detalhe"} >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Viagem para Lua" />
            </ListItemButton>
          </ListItem>
          </Link>
        </List>
      </nav>
      
          
            
        
        </ListaContainer>
    )

}

export default ListaTrip






/*<nav aria-label="secondary mailbox folders">
        <List>
        
        <ButtonDiv>
        <Link to={"/viagens/detalhe"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Viagem para Marte" />
            </ListItemButton>
          </ListItem>
          </Link>
        
        <Link to={"/viagens/detalhe"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Viagem para Lua" />
            </ListItemButton>
          </ListItem>
          </Link>
          </ButtonDiv>
          
          </List>
      </nav>*/



     // import { Button, List, ListItem, ListItemText, ListItemButton }from "@mui/material"