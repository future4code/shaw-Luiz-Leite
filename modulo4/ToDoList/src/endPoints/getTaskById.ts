import { Request, Response } from "express"
import selectTaskById from "../dataBase/selectTaskById"
import * as moment from "moment"

export default async function getTaskById(
    req:Request,
    res:Response
){
    try{
        
        //validar entradas da requisiçao
        //**não necessita de validação**//

        //consultar o banco de dados

        const result = await selectTaskById (req.params.id)
        if(!result){
            res.status(404).send({
                message: "Tarefa não encontrada"

            })
            return
        }

        res.status(200).send ({
            id: result.id,
            title:result.title,
            description:result.description,
            limitDate:moment(result.limitDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            status: result.status,
            creatorUserId: result.creatorUser_id,
            creatorUserNickname: result.nickname

        })



        //validar a saidas do banco


        //responder a requisição

    }
    catch (error){
        res.status(400).send({
            message: error.message || error.sqlmessage
        })

    }
}