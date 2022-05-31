import * as express from 'express';
import * as cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors()); 

app.get('/', function (req,res){
    
    type user = {
        id: number,
        name: string,
        phone: number,
        email: string,
        website: string
            
    }

    let userList: user[] = [
{id:1,
name:"luiz",
phone:6796722233,
email:"luiz_marccello@hotmail.com",
website: "www.luiz.com.br"}

    ]
    res.send(userList);
});

app.listen(3003,function () {
console.log ("meu servidor está rodando na porta 3003")

});
