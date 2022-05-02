import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TripDetailsContainer } from "./styled"
import { useNavigate } from "react-router-dom"



export const TripDetailsPage = () => {


    const navigate = useNavigate()


    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [applicationText, setApplication] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")
    const [trips, setGetTrip] = useState([])
    const [myId, setmyId] = useState("")

    useEffect(() => {
        const token = localStorage.getItem ('token')
        getTripDetails();
    }, []);

    
    const getTripDetails = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-shaw/trip/:id",{
                headers: {
                    //auth: token
                }
            } )
            
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log ('Deu erro:', err.response)
            })

    }

    const renderNameTrips = trips && trips.map((trip) => {
        return (
            <option key={trip.id} value={trip.id}> {trip.name} </option>
        )
    })

    console.log (myId)


    const onchangeSelectId = (event) => {
         setmyId(event.target.value)
    }
    const onchangeName = (event) => { 
        setName(event.target.value)
    }
    const onchangeAge = (event) => {
        setAge(event.target.value)
    }
    const onchangeApplicationText = (event) => {
        setApplication (event.target.value)
    }
    const onchanProfession = (event) => {
        setProfession(event.target.value)
    }
    const onchanCountry = (event) => {
        setCountry(event.target.value)
    }


    const postToAppTrip = () => {

        const body = {
            name: name,
            age: age,
            applicationText: applicationText,
            profession: profession,
            country: country,
        }
        console.log (body)

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
        <TripDetailsContainer>
            <h1>Detalhes da viagem</h1>
        </TripDetailsContainer>
    )


}

export default TripDetailsPage