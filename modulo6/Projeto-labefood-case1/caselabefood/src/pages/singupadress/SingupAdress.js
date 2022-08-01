import React from "react";
import { Main,InputMaterial,ButtonStyled } from "../singup/Styled"
import {useForm} from "../../hooks/UseForm"
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL"
import { useNavigate } from "react-router-dom";
import { gotToFeed } from "../../routes/Coordnator";


const SignupAdress = () => {

    const {form, onChange,clean} = useForm ({
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""
    })

    const navigate = useNavigate
    
    const onSubmitFormAdress = (event) =>{
        event.preventDefault();
       addAdress()
    }
    
   
    const addAdress = async() =>{

        const token = localStorage.getItem('token')

        await axios.put (`${BASE_URL}/address`,form,{
            headers:{
            auth: token
            }
        })
        .then ((res) =>{
            localStorage.setItem('token',res.data.token)
            gotToFeed(navigate)
        })
        .catch ((err) =>{
            console.log(err.response)
        })
    }
    
    
    return (
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
        <ButtonStyled type="submit">Entrar</ButtonStyled>
        </form>
        </Main>
    )
}
export default SignupAdress