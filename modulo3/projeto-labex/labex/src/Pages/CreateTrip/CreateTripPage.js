import {CreateTripContainer} from "./styled"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"



export const CreateTripPage = () => {

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
        <CreateTripContainer>
            <h1>Criar Viagem</h1>
            <input placeholder="Nome" />
            <select >
                <option>Escolha Planeta</option>
                <option>viagem1</option>
                <option>viagem2</option>
                <option>viagem3</option>
                <option>viagem4</option>
            </select>
            <input placeholder="Prazo do Serviço" type="date" />
            <input placeholder="Descrição" />
            <input placeholder="Duração em dias" />
            <button>Voltar</button>
            <button>Criar</button>
        </CreateTripContainer>
    )

}

export default CreateTripPage



