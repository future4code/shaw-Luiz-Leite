import React, { useState } from "react";
import { Main, Form, ButtonStyled, DivPassword, InputMaterial } from "./Styled"
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../../constants/BASE_URL"
import { gotToFeed } from "../../routes/Coordnator";
import { Button } from "@mui/material";




const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [errEmail, setErrEmail] = useState('')
    const [errPass, setErrPass] = useState('')
    const [checkErrEmail, setCheckErrEmail] = useState(false)
    const [checkErrPass, setCheckErrPass] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const navigate = useNavigate()


    const onSubmitLogin = (event) => {
        event.preventDefault()
        const userLogin = {
            email,
            password
        }
        loginApi(userLogin)
        console.log(userLogin)

    }
    const loginApi = async (body) => {
        await axios.post(`${BASE_URL}/login`, body)
            .then((res) => {

                console.log(res.data)
                setEmail('')
                setPassword('')
                setErrEmail('')
                setErrPass('')
                setCheckErrEmail(false)
                setCheckErrPass(false)
                localStorage.setItem('token', res.data.token)
                gotToFeed (navigate)


            })
            .catch((err) => {
                if (err.response.data.message.includes('senha está incorreta')) {
                    setErrPass(err.response.data.message)
                    setCheckErrPass(true)

                } else {
                    setErrEmail(err.response.data.message)
                    setCheckErrEmail(true)
                }
                console.log(err.response.data.message)
            })
            
    }

    return (
        <Main>
            <p>Entrar</p>
            <Form onSubmit={onSubmitLogin}>
                <InputMaterial
                    error={checkErrEmail}
                    helperText={checkErrEmail ? errEmail : ''}
                    id="outlined-basic"
                    label="Email"
                    type={'email'}
                    variant="outlined"
                    placeholder={"email@email.com"}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                
                <DivPassword>
                    <InputMaterial
                        error={checkErrPass}
                        helperText={checkErrPass ? errPass : ''}
                        id="outlined-basic"
                        label="Password"
                        type={showPassword ? 'password' : 'text'}
                        variant="outlined"
                        placeholder={"Minimo 6 caracteres"}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
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
                <ButtonStyled type="submit">Entrar</ButtonStyled>
            </Form>
            <Button onClick={()=>goToSingUp(navigate)}>Não possui cadastro clik aqui</Button>
        </Main>
    )
}
export default Login