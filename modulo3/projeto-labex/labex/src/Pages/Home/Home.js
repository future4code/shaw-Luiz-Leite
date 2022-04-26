import React from 'react';
import {HomeContainer} from "./styled"
import {useNavigate} from "react-router-dom"
import {goToListTrip} from '../Routes/Coordinator/'
import {goToAdmin} from '../Routes/Coordinator/'



export const HomePage = () => {
   
    const navigate = useNavigate ()

    
        return (
            <HomeContainer>
                <h1>Labex</h1>
                <button onClick={() => goToListTrip (navigate)}>Ver viagens</button>
                <button onClick={() => goToAdmin (navigate)}>área de admim</button>
            </HomeContainer>
        );
    };


export default HomePage
