import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ApplicationContainer } from "./styled"
import { goBack } from '/Users/Luiz Maecelo/Desktop/shawterminal/shaw-Luiz-Leite/modulo3/projeto-labex/labex/src/Routes/Coordinator'
import { useNavigate } from "react-router-dom"



export const ApplicationFormPage = () => {


    const navigate = useNavigate()


    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [applicationText, setApplication] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")
    const [getTrip, setGetTrip] = useState([])
    const [myId, setmyId] = useState("")

    useEffect(() => {
        getTripsName();
    }, []);

    const body = {
        name: name,
        age: age,
        applicationText: applicationText,
        profession: profession,
        country: country,
    }

    const getTripsName = () => {
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

    const renderNameTrips = getTrip.map((trip) => {
        return (
            <option value={trip.id}>
                <p>{trip.name}</p>
            </option>
        )
    })


    const onchangeSelectId = (event) => {
        setSelectId(event.target.value)
    }
    const onchangeName = (event) => {
        setName(event.target.value)
    }
    const onchangeAge = (event) => {
        setAge(event.target.value)
    }
    const onchangeApplicationText = (event) => {
        setApplicationText(event.target.value)
    }
    const onchanProfession = (event) => {
        setProfession(event.target.value)
    }
    const onchanCountry = (event) => {
        setCountry(event.target.value)
    }

    const postToAppTrip = () => {
        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/:id/apply", body)
            .then((res) => {
                alert("Formulário submetido com sucesso. Boa sorte!")
                console.log(res.data)
                setGetTrip(res.data)
            })
            .catch(error => {
                alert("Por favor preencha todos os campos e tente novamente.")
                console.log(error.message)
            })

    }



    return (
        <ApplicationContainer>
            <h1>Inscreva - se para uma viagem</h1>
            <select onChange={onchangeSelectId}>{renderNameTrips}</select>
            <input
                value={name}
                onChange={onchangeName}
                placeholder="Nome" />

            <input
                placeholder="Idade"
                value={age}
                onChange={onchangeAge}
            />

            <input
                placeholder="Texto de candidatura"
                value={applicationText}
                onChange={onchangeApplicationText}
            />

            <input
                placeholder="Profissão"
                value={country}
                onChange={onchanProfession}
            />

            <select onChange={onchanCountry}>
                <option>Escolha um país</option>
            </select>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={postToAppTrip}>Enviar</button>
        </ApplicationContainer>
    )


}

export default ApplicationFormPage