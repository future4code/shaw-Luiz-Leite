import { useState, useEffect } from "react";
import axios from "axios";


const useRequestData = (initialDate, url) => {
    const [data, setData] = useState(initialDate)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
                alert('Ocorreu um erro, tente novamente')
            })
    }, [url])
}

export default useRequestData
