import { Request, Response } from "express"
import selectUserById from "../dataBase/selectUserById"

export default async function getUserById(
    req:Request,
    res:Response
){
    try{
        
        //validar entradas da requisiçao

        //**não precisa validar**//

        //consultar o banco de dados

        const user = await selectUserById (req.params.id)
        

        //validar a saidas do banco
        if (!user){
            res.status(404).send({
                message:"Usuario não encontrado"
            })
            return
        }

        //responder a requisição
        res.status(200).send ({
            id:user.id,
            nickname:user.nickname
        })


    }
    catch (error){
        res.status(400).send({
            message: error.message || error.sqlmessage
        })

    }
}