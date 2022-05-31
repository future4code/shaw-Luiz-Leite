import * as express from 'express';
import * as cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors()); 

app.get('/', function (req,res){
    


    
})

app.listen(3003,function () {
console.log ("meu servidor está rodando na porta 3003")

})

