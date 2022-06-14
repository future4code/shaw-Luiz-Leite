import axios from "axios"
import {baseURL} from "./baseURL"



//*a.* Qual endpoint você deve utilizar para isso?

//GET/subscribers


//b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?



//c. Implemente uma função nomeada que faça o que foi pedido.

const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

 