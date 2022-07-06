import { CircularProgress } from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "../../Hooks/UseForm";

import { login } from "../../services/users";
import { FormContainer } from "./Styled";

function LoginForm({ setRightButtonText}) {
    const { form, onChange, cleanFields } = useForm({
        email: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const onSubmitLogin = (event) => {
        event.preventDefault()
        login(form, cleanFields, navigate, setRightButtonText, setIsLoading)
    }

    return (
        <FormContainer onSubmit={onSubmitLogin}>
            <input
                placeholder="E-mail"
                name="email" 
                value={form.email}
                onChange={onChange}
                type={"email"}
                required />
            <input
                placeholder="Senha"
                name="password"
                value={form.password}
                onChange={onChange}
                type={"password"}
                required />
            <button type="submit">
                {isLoading? <CircularProgress color="inherit" size={20}/> : <>Continuar</>}
            </button>
        </FormContainer>
    );
}

export default LoginForm;