import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ApplicationContainer } from "./styled"
import {goBack} from '/Users/Luiz Maecelo/Desktop/shawterminal/shaw-Luiz-Leite/modulo3/projeto-labex/labex/src/Routes/Coordinator'
import {useNavigate} from "react-router-dom"



export const ApplicationFormPage = () => {

    
    const navigate = useNavigate ()

    const [postApply, setApply] = useState([])
    const [name,setName] = useState([])
    const [age, setAge] = useState([])
    const [applicationText, setApplication] = useState([])
    const [profession, setProfession] = useState([])
    const [country, setCountry] = useState([])

    useEffect(() => {
        postApply();
    }, []);

    const body = {
        "name": name,
        "age": age,
        "applicationText": applicationText,
        "profession":profession,
        "country":country,

    }


    const postApplys = () => {
        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-shaw/trips/:id/apply")
            .then((res) => {
                console.log(res.data.trip)
                postApply(res.data.trip)
            })
            .catch((err) => {
                alert(err.data.trip)
            })

    }

    const renderApply =  postApply.map((trip) => {
        return (
            <div key={trip.id}>
                <p>{trip.name}</p>
                <p>{trip.age}</p>
                <p>{trip.applicationText}</p>
                <p>{trip.profession}</p>
                <p>{trip.country}</p>
                
            </div>
        )
    })


    
        return (
            <ApplicationContainer>
                <h1>Inscreva - se para uma viagem</h1>
                <select >
                    <option>Escolha uma viagem</option>
                </select>
                <input placeholder="Nome" />
                <input placeholder="Idade" />
                <input placeholder="Texto de candidatura" />
                <input placeholder="Profissão" />
                <select >
                    <option>Escolha um país</option>
                </select>
                <button onClick={() => goBack (navigate)}>Voltar</button>
                <button>Enviar</button>
                {renderApply}
            </ApplicationContainer>
        )
    
}

export default ApplicationFormPage