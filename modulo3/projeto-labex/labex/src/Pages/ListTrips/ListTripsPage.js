import React from 'react';
import {ListaContainer} from "./styled"
import {useNavigate} from "react-router-dom"
import {goToListTrip} from '../Routes/Coordinator/'
import {goToAdmin} from '../Routes/Coordinator/'
import {goBack} from '../Routes/Coordinator/'





export const ListaTrip = () => {
    
    const navigate = useNavigate ()

    
        return (
            <ListaContainer>
                <button onClick={() => goBack (navigate)}>Voltar</button>
                <button>Entrar</button>
                <h1>Lista de Viagens</h1>
                <div> 
                <p>Nome:</p>
                <p>Descrição:</p>
                <p>Planeta:</p>
                <p>Duração:</p>
                <p>Data:</p>
                </div>
                
            </ListaContainer>
        )
    
}

export default ListaTrip