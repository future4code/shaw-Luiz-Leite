import { Request, Response } from "express"
import insertUser from "../dataBase/insertUser"


export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        //validar entradas da requisiçao

        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email

        ) {
            res.status(400).send('preencha os campos "name","nickname","email"')
            return

        }

        //consultar o banco de dados

        const id: string = Date.now() + Math.random().toString()

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email

        )


        //validar a saidas do banco

        //** não ouve saída**//


        //responder a requisição

        res
            .status(200)
            .send('Usuario criado com sucesso!')

    }
    catch (error) {
        res.status(400).send({
            message: error.message || error.sqlmessage
        })

    }
}