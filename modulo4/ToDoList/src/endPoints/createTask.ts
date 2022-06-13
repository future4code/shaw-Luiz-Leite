import { Request, Response } from "express"
import * as moment from "moment"
import insertTask from "../dataBase/insertTask"

export default async function createTask(
    req: Request,
    res: Response
) {
    try {

        //validar entradas da requisiçao

        if (
            !req.body.title ||
            !req.body.description ||
            !req.body.limitDate ||
            !req.body.creatorUserId
        ) {
            res.status(400).send({
                message: '"title","description","limitDate" e "creatorUserId" são obrigatórios'
            })

            return

        }
        const dateDiff: number = moment(req.body.deadline, 'DD/MM/YYYY').unix() - moment().unix()

        if (dateDiff <= 0) {
            res.status(400).send({
                message: "limitDate deve ser uma data futura"
            })
            return
        }

        //consultar o banco de dados

        const id: string = Date.now() + Math.random().toString()

        await insertTask(
            id,
            req.body.title,
            req.body.description,
            moment(req.body.limitDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            req.body.creatorUserId,
        )


        //validar a saidas do banco

        //**não ouve saidas do banco**//

        //responder a requisição

        res.status(400).send({
            message: "Tarefa criada com sucesso",
            id

        })

    }
    catch (error) {
        res.status(400).send({
            message: error.message || error.sqlmessage
        })

    }
}