import * as express from "express";
import { Express } from "express";
import * as cors from "cors";
import { Request, Response } from "express";
import { accounts } from "./accounts";



const app: Express = express()

app.use(express.json());
app.use(cors());

app.post("/users/create", (req: Request, res: Response) => {

    try {
        const { name, cpf, dateOfBirthAsString } = req.body
        const [day, month, year] = dateOfBirthAsString.split("/") // [01,01,2020]
        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)
        //validar as entradas da requisiçao

        const ageInMillisseconds:number=Date.now()-dateOfBirth.getTime()
        const ageInYears:number = ageInMillisseconds / 1000 / 60 / 60 / 24 / 365

        if (ageInYears<18){
            res.statusCode = 406
            throw new Error ("Idade deve ser maior que 18 anos")
        }

        //consultar ou alterar a base de dados - criar uma nova conta
        accounts.push({
            name,
            cpf,
            dateOfBirth,
            balance: 0,
            statement: []
        })

        //validar os resultados da consulta

        //enviar a resposta
        res.status(201).send("conta criada com sucesso")
    } catch (error) {
        console.log(error)
        res.send(error.message)

    }

})

app.get("/users/all",(req: Request, res: Response) => {
    try {
        if(!accounts.length){
            res.statusCode=404
            throw new Error("nenhuma conta encontrada")
        }
        res.status(200).send(accounts)
    } catch (error){
        res.send(error.message)
    }
})

app.listen(3003, function () {
    console.log("meu servidor está rodando na porta 3003")
}) 