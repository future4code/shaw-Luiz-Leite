import * as express from "express";
import * as cors from "cors";
import { users } from "./data";
import * as Request  from "express";
import * as Response  from "express";


const app = express();

app.use(express.json());
app.use(cors());

//Vamos começar fazendo um endpoint que busque todos os usuários de uma lista.
//A lista está disponível no arquivo data.ts.


app.get('/users', (req, res) => {
    
    
type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
    }
   
  
    const { id,name,email,type,age }: user = req.body
    users.push({ id, name,email,type,age })
    res.send(users)
 

})

//Qual método HTTP você deve utilizar para isso?
//http://localhost:3003/users

//Como você indicaria a **entidade** que está sendo manipulada?
//get - usado para pegar informaçoes e transferir para api


//Agora, vamos refatorar o exercício 1 e implementar uma funcionalidade 
//que busque todos os usuários que tenham uma 
//propriedade type específica, recebendo apenas um type por vez. 

app.get('users/:type', (req: Request, res: Response)=>{
    let erroCode = 400
    try {
        let type : string = request.query.type as string
        const userType:User[] = users.filter ((types) => {
            return types.type === type
        })
        if (!userType){
            codeError = 404
            throw new Error ("não encontrado tipo de type.")
        }
        response.status(200).send ()
    } catch (error) {
        response.status (codeError).send ({messsage:"erro na requisição"})
    }
   
})

//Vamos agora praticar o uso de buscas mais variáveis. 
//Refatore novamente o exercício 1 
//e implemente a funcionalidade de search, 
//para encontrar um usuário buscando por nome.

//a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?

//b. Altere este endpoint para que ele devolva uma mensagem 
//de erro caso nenhum usuário tenha sido encontrado.


app.get('users/:usuario', (req:Request, res: Response)=> {

    try {
        const {usuario} = req.params
        const userType:User[] = users.filter ((types) => {
            return types.type === type
        })



app.listen(3003, function () {
    console.log("meu servidor está rodando na porta 3003")

}) 