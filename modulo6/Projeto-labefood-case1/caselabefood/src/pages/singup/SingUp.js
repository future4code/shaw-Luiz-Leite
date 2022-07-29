import React, { useState } from "react";
import { useForm } from "../../hooks/UseForm"
import { Main, InputMaterial, ButtonStyled, DivPassword } from "../singup/Styled"
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios'
import { BASE_URL } from "../../constants/BASE_URL"
import { useNavigate } from "react-router-dom"
import {gotToSingUpAdress} from "../../routes/Coordnator"
import {Header} from "../../components/header/Header";






const SignUp = () => {



    const { form, onChange, clean } = useForm({

        "name": "",
        "email": "",
        "cpf": "",
        "password": ""
    })

    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [checkErrPass, setCheckErrPass] = useState(false)
    const [errPass, setErrPass] = useState('')

    const Navigate = useNavigate()
    

    const onSubmitForm = (event) => {
        event.preventDefault()
        if (form.password !== confirmPassword) {
            setCheckErrPass(true)
        } else {
            setCheckErrPass(false)
            signUpPerson ()
        }
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

const signUpPerson = async () =>
await axios.post(`${BASE_URL}/signup`,form)
.then ((res ) => {
    localStorage.setItem('token', res.data.token)
    alert(`boas vindas ${res.data.user.name}`)
    gotToSingUpAdress(Navigate)
})
.catch ((err) => {
    alert(err.response.data)
    clean()
    setConfirmPassword('')
})


    return (
        <Main>
        <Header back/>
            <p>Cadastrar</p>
            <form onSubmit={onSubmitForm}>
                <InputMaterial
                    id="outlined-basic"
                    label={"nome"}
                    name='name'
                    type={'text'}
                    variant="outlined"
                    placeholder={"Digite seu nome"}
                    value={form.name}
                    onChange={onChange}
                />
                <InputMaterial
                    id="outlined-basic"
                    label={"Email"}
                    name='email'
                    type={'email'}
                    variant="outlined"
                    placeholder={"Digite seu email"}
                    value={form.email}
                    onChange={onChange}
                />
                <InputMaterial
                    id="outlined-basic"
                    label={"Cpf"}
                    name='cpf'
                    type={'email'}
                    variant="outlined"
                    placeholder={"Digite seu cpf"}
                    value={form.cpf}
                    onChange={onChange}
                />
                <DivPassword>
                    <InputMaterial
                        id="outlined-basic"
                        label={"Password"}
                        name='password'
                        type={showPassword ? 'password' : 'text'}
                        variant="outlined"
                        placeholder={"Minimo 6 caracteres"}
                        value={form.password}
                        onChange={onChange}
                        inputProps={{ minLength: 6, title: "A senha deve conter no minimo 6 caracteres" }}
                        required
                    />

                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </DivPassword>
                <DivPassword>
                    <InputMaterial
                        error={checkErrPass}
                        helperText={checkErrPass ? errPass : ''}
                        id="outlined-basic"
                        label="Password"
                        type={showPassword ? 'password' : 'text'}
                        variant="outlined"
                        placeholder={"confirme a senha anterior"}
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        inputProps={{ minLength: 6, title: "confirme a senha anterior" }}
                        required
                    />

                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </DivPassword>
                <ButtonStyled type="submit">Entrar</ButtonStyled>

            </form>
        </Main>
    )
}
export default SignUp