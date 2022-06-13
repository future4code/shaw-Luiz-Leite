import { Request, Response } from "express"
import { title } from "process"
import {moment} from 'moment';

export default async function createTask(
    req:Request,
    res:Response
){
    try{
        
        //validar entradas da requisiçao

        if(
            !req.body.title ||
            !req.body.description ||
            !req.body.limitDate ||
            !req.body.creatorUserId ||
        ){
            res.status(400).send({
                message: '"title","description","deadline" e "authorId" são obrigatórios'
            })

            return
    
        }
        const dateDiff: number = moment (req.body.deadline, 'DD/MM/YYYY').unix() - moment().unix()

        //consultar o banco de dados


        //validar a saidas do banco


        //responder a requisição

    }
    catch (error){
        res.status(400).send({
            message: error.message || error.sqlmessage
        })

    }
}