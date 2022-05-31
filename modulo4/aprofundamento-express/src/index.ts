import * as express from "express"; 
import * as cors from "cors"; 

const app = express();

app.use(express.json());
app.use(cors()); 

//crie um andpoint pong

app.get('/ping', (req, res) => {
res.send("pong")
})



//Acesse a API do JSONPlaceholder e observe os endpoints que buscam afazeres (”todos”). 
//Crie uma variável de tipo para representar cada afazer.




type Objects = {
    userId: string|number,
    id: string|number,
    title: string,
    completed: boolean
}

const todos: Objects [] = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
      },
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true
      },

]


//Crie um array de afazeres para servir como base de dados da nossa API 
//e utilize a tipagem desenvolvida no exercício anterior. 

app.get('/todos', (req, res) => {
    res.send(todos)
    })



//Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo com um único status, ou seja,
// retorne ou afazeres concluídos ou somente os que ainda estão em andamento.



app.get('/concluido', (req,res)=> {
const concluido = todos.filter((todo) => {
    if(todo.completed === true) {
        return todo.title
    }
})
res.send(concluido)
})



//Construa um endpoint de criação de afazer. 
//A resposta deve retornar o array de afazeres atualizado.

app.post ('/criar', (req,res)=>{
    const {userId,id,title,completed}=req.body;

    todos.push({userId,id,title,completed});

    res.status(200).send(todos)


})



//Construa um endpoint de edição do status de um afazer, 
//ou seja, de completo para incompleto e vice-versa.

app.put ("afazeres/:status", (req,res)=>{
    const statusTarefa = req.params.status
});


//Construa um endpoint que deleta um determinado afazer 
//de acordo com sua id.

app.delete ('/afazeres')


//Construa um endpoint que retorne todos os afazeres de uma determinada id de usuário.

//Crie a documentação Postman dos endpoints desenvolvidos






app.listen(3003,function () {
console.log ("meu servidor está rodando na porta 3003")

})
