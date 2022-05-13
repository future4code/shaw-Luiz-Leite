import axios from 'axios';
import { BASE_URL } from '../Components/Url'
import {goToFeedPage} from '../Routes/Coordinator'



export const login = (body, clear,navigate) => {
    axios.post (`${BASE_URL}/users/login`, body)
    .then ((res) => {
    localStorage.setItem("token", res.data.token)
    clear()
    goToFeedPage(navigate)
    
})
    .catch((err)=>alert("Erro no login"))
}

export const signup = (body, clear,navigate) => {
    axios.post (`${BASE_URL}/users/signup`, body)
    .then ((res) => {
    localStorage.setItem("token", res.data.token)
    clear()
    goToFeedPage(navigate)
    
})
    .catch((err)=>alert("Erro no login"))
}
 

