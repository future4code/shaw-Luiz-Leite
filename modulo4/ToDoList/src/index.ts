import * as express from "express";
import * as cors from "cors";
import knex  from "knex";
import * as dotenv from 'dotenv';
import createUser from './endPoints/createUser'
import getUserById from "./endPoints/getUserById";
import editUser from "./endPoints/editUser";

dotenv.config()

const connection = knex ({ // Estabelece conexão com o banco
    client: "mysql",
    connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    multipleStatements: true
    }
   })
   
   export default connection

const app = express()
app.use(express.json());
app.use(cors());


//primeiro endPoint (createUser)
app.put('/user', createUser)

//segundo endPoint (getUserById)
app.get('/user/:id', getUserById)

//terceiro endPoint (editUser)
app.post('/user/edit/:id', editUser)

//quarto endPoint (createTask)

//quinto endPoint



app.listen(3003, () => {
    console.log ("Servidor rodando na porta 3003")
})