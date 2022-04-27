import React from 'react';
import {HomeContainer} from "./styled"
import {useNavigate} from "react-router-dom"
import {goToListTrip , goToAdmin} from '/Users/Luiz Maecelo/Desktop/shawterminal/shaw-Luiz-Leite/modulo3/projeto-labex/labex/src/Routes/Coordinator'




export const HomePage = () => {
   
    const navigate = useNavigate ()

    const goToLogin = (navigate) => {
        navigate ("/login")
    }

    
        return (
            <HomeContainer>
                <h1>Labex</h1>
                <button onClick={() => goToListTrip (navigate,"PT-BR")}>Ver viagens - PT-BR</button>
                <button onClick={() => goToLogin (navigate, "EN")}>área de admim - EN</button>
            </HomeContainer>
        );
    };


export default HomePage
