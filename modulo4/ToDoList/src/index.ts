import * as express from "express";
import * as cors from "cors";
import * as knex  from "knex";
import * as dotenv from "dotenv";

dotenv.config()

export const connection = knex.knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app = express()
app.use(express.json());
app.use(cors());


//primeiro endPoint


app.listen(3003, () => {
    console.log ("Servidor rodando na porta 3003")
})