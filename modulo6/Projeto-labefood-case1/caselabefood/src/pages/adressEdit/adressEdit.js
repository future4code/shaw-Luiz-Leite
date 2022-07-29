import { useEffect } from "react"
import axios from "axios"
import React from "react";
import { Main,InputMaterial,ButtonStyled } from "../singup/Styled"
import {useForm} from "../../hooks/UseForm"
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL"
import {useNavigate } from "react-router-dom";
import { goToProfile} from "../../routes/Coordnator";
import useProtectedPage from "../../hooks/UseProctedPage"



const AdressEdit = () =>{

    useProtectedPage()


    const {form, onChange,clean, setForm} = useForm ({
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""
    })

    const getAdress = async() =>{
        await axios.get (`${BASE_URL}/profile/address`,{
            headers:{
            auth: window.localStorage.getItem('token')
            }
        })
        .then ((res) =>{
         console.log(res.data.address)
         setForm({
            "street":res.data.address.street,
            "number":res.data.address.number,
            "neighbourhood":res.data.address.neighbourhood,
            "city": res.data.address.city,
            "state": res.data.address.state,
            "complement": res.data.address.complement
            
         })
        })
        .catch ((err) =>{
            console.log(err.response)
        })
    }
    useEffect(() =>{
        getData()
    },[])

    const navigate = useNavigate()


    const onSubmitFormAdress = (event) => {
        event.preventDefault();
        addAdress()
    }
    
    const addAdress = async() =>{
        const token = localStorage.getItem('token')
        await axios.put (`${BASE_URL}/profile/address`,form,{
            headers:{
            auth: token
            }
        })
        .then ((res) =>{
          localStorage.setItem ('token', res.data.token)
          goToProfile(Navigate)
        })
        .catch ((err) =>{
            console.log(err.response)
        })
    }
    useEffect(() =>{
        getData()
    },[])
    return[data]
}


    return(
        <div>
           <Main>
        <p>SignupAdress</p>
        <form onSubmit={onSubmitFormAdress}> 
        <InputMaterial
                    id="outlined-basic"
                    label={"Logradouro"}
                    name={"street"}
                    type={'text'}
                    variant="outlined"
                    placeholder={"Rua / Av."}
                    value={form.street}
                    onChange={onChange}
                    required
                    
        />
        <InputMaterial
                    id="outlined-basic"
                    label={"Numero"}
                    name={"number"}
                    type={'number'}
                    variant="outlined"
                    placeholder={"Numero"}
                    value={form.number}
                    onChange={onChange}
                    required
        />
        <InputMaterial
                    id="outlined-basic"
                    label={"Bairro"}
                    name={"neighbourhood"}
                    type={'text'}
                    variant="outlined"
                    placeholder={"Bairro"}
                    value={form.neighbourhood}
                    onChange={onChange}
                    required
        />
        <InputMaterial
                    id="outlined-basic"
                    label={"Complemento"}
                    name={"complement"}
                    type={'text'}
                    variant="outlined"
                    placeholder={"complemento"}
                    value={form.complement}
                    onChange={onChange}
                    required
        />
        <InputMaterial
                    id="outlined-basic"
                    label={"Cidade"}
                    name={"city"}
                    type={'text'}
                    variant="outlined"
                    placeholder={"Cidade"}
                    value={form.city}
                    onChange={onChange}
                    required
        />
        <InputMaterial
                    id="outlined-basic"
                    label={"Estado"}
                    name={"state"}
                    type={'text'}
                    variant="outlined"
                    placeholder={"Estado"}
                    value={form.state}
                    onChange={onChange}
                    required
        />
        <ButtonStyled type="submit">Salvar</ButtonStyled>
        </form>
        </Main>
        </div>
    )


export default AdressEdit