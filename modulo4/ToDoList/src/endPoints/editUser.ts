import { Request, Response } from "express"
import upDateUser from "../dataBase/updateUser"

export default async function editUser(
    req: Request,
    res: Response
) {
    try {

        //validar entradas da requisiçao
        if (
            req.body.name === '' ||
            req.body.nickname === '' ||
            req.body.email === ''
        ) {
            res.status(400).send({
                message: "Nenhum dos campos pode estar em branco"

            })
            return
        }
        if (!req.body.name && !req.body.nickname && !req.body.eamil) {
            res.status(400).send({
                message: "Escolha ao menos um valor para alterar"
            })
            return
        }

        //consultar o banco de dados
        await upDateUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email

        )

        //validar a saidas do banco

        //** não possui saidas **//


        //responder a requisição


        res.status(200).send({
            message: "Usuario atualizado!"
        })
    }

    catch (error) {
        res.status(400).send({
            message: error.message || error.sqlmessage
        })

    }
}