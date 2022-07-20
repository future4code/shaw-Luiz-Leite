import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gotToLogin } from "../routes/Coordnator";

export const useProtectedPage = () =>{
    const navigate = useNavigate()


    const token = localStorage.getItem('token')
    useEffect (()=>{
        if(!token){
            gotToLogin(navigate)
        }
    },[])

}