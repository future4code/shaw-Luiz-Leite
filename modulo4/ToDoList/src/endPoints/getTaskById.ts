import { Request, Response } from "express"

export default async function createUser(
    req:Request,
    res:Response
){
    try{
        
        //validar entradas da requisiçao

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