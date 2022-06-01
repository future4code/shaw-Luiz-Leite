import * as express from "express";
import * as cors from "cors";
import { produtos } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

//Crie uma nova API do zero (ou utilizando um template) e desenvolva um endpoint de 
//teste com método `**GET`** 
//no path **`“/test”`** que retorna uma mensagem genérica avisando 
//que a API está funcional.

app.get('/test', (req, res) => {
    res.send("API funcionado")
})

//Crie um arquivo chamado data.js que exporta um array de produtos. 
//Cada produto será representado por um objeto com propriedades: id (string)
//, name (string) e price (number). Popule manualmente o array com pelo menos 3 produtos.


//Desenvolva um endpoint que cria um novo produto e retorna a lista de produtos atualizada. 
//A id do produto deve ser gerada automaticamente pela API.

type user = {
    id: string,
    name: string,
    price: number
}
app.post('/produtonovo', (req, res) => {
    const idUser = Date.now().toString()
    const { name, price }: user = req.body
    produtos.push({ id: idUser, name, price })
    res.send(produtos)
})

//Crie um endpoint que retorna todos os produtos.

app.get('/getallprodutos', (req, res) => {
    const getallprodutos = produtos.map((produtos:any) =>{
        return produtos

    })
    res.send(getallprodutos)
})


//Crie um endpoint que edita o preço de um 
//determinado produto e retorna a lista de produtos atualizada.


app.put('/editarpreço/:id', (req,res) => {
    const idProduto = req.params.id;
    const { price } = req.body
    const map = produtos.find ((item:user) => item.id===idProduto)
    map.price = price
    
    return res.send(idProduto)
})


//Construa um endpoint que deleta um determinado 
//produto e retorna a lista de produtos atualizada.

app.delete('/deletarproduto/:id',(req,res) => {
    const idProduto = req.params.id;
    const deletar:number=produtos.findIndex((item:user) => item.id===idProduto)
    produtos.splice(deletar,1)
    
    return res.send(idProduto)
})



//Refatore o endpoint do exercício 3 (criar produto) para que sejam 
//implementados fluxos de validação dos dados recebidos (name e price)



app.listen(3003, function () {
    console.log("meu servidor está rodando na porta 3003")

})