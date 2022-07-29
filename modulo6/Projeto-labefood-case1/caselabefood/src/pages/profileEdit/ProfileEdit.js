import React, { useEffect, useState } from "react"
import { useRequestData } from "../../hooks/UseRequestData"
import { Main, InputMaterial, ButtonStyled } from "../singup/Styled"
import {BASE_URL} from "../../constants/BASE_URL"
import axios from "axios"
import { goToProfile } from "../../routes/Coordnator"
import useProtectedPage from "../../hooks/UseProctedPage"


const ProfileEdit = () =>{

    useProtectedPage()

    const person = useRequestData({},`${BASE_URL}/profile`)

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [cpf,setCpf] = useState('')

    const navigate = useNavigate()


    const getPerson = async() =>{
        await axios.get(`${BASE_URL}/profile`,{
            headers: {
                auth:window.localStorage.getItem('token')
            }
        })
        .then((res) =>{
            setName(res.data.user.name)
            setEmail(res.data.user.email)
            setCpf(res.data.user.cpf)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    const updateProfile= async() =>{
        const body ={
            name,
            email,
            cpf
        }
        await axios.put(`${BASE_URL}/profile`,body,{
            headers:{
                auth:window.localStorage.getItem('token')
            }
        })
        .then((res)=>{
            console.log(res.data)
            goToProfile(navigate)
        })
        .catch((err)=>{
            console.log(err.response)
        })
        
    }

    useEffect(() =>{
        getPerson()
    })

    console.log(personScreen)
 


    const onSubmitForm = (event) => {
        event.preventDefault()
       
    }


   return(
    <div>
        <Main>
        <Header back/>
            <p>Editar</p>
            <form onSubmit={onSubmitForm}>
                <InputMaterial
                    id="outlined-basic"
                    name='name'
                    type={'text'}
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <InputMaterial
                    id="outlined-basic"
                    name='email'
                    type={'email'}
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputMaterial
                    id="outlined-basic"
                    name='cpf'
                    type={'email'}
                    variant="outlined"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                
                <ButtonStyled type="submit">Salvar</ButtonStyled>

            </form>
        </Main>
    </div>
   ) 
}
export default ProfileEdit