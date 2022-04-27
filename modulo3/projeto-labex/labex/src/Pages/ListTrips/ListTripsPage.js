import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListaContainer } from "./styled"
import { useNavigate } from "react-router-dom"
import { goBack } from '/Users/Luiz Maecelo/Desktop/shawterminal/shaw-Luiz-Leite/modulo3/projeto-labex/labex/src/Routes/Coordinator'





export const ListaTrip = () => {

    const navigate = useNavigate()

    const goToAppForm = (navigate) => {
        navigate("/appForm")
    }

    const [getTrip, setGetTrip] = useState([])

    useEffect(() => {
        getTrips();
    }, []);

    const getTrips = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-shaw/trips")
            .then((res) => {
                console.log(res.data.trips)
                setGetTrip(res.data.trips)
            })
            .catch((err) => {
                alert(err.data.trips)
            })

    }

    const renderTrips = getTrip.map((trip) => {
        return (
            <div key={trip.id}>
                <p>{trip.planet}</p>
                <p>{trip.name}</p>
                <p>{trip.description}</p>
            </div>
        )
    })



    return (
        <ListaContainer>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={() => goToAppForm(navigate)}>Inscrever-se</button>
            <h1>Lista de Viagens</h1>
            {renderTrips}
        </ListaContainer>
    )

}

export default ListaTrip