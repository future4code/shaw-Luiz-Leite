import { Request, Response } from "express"
import connection from "../src/connection"
import { generateToken } from "../src/services/authenticator"
import generateId from "../src/services/idGeneration"
import { userTableName } from "../src/types/types"

export default async function signup(
    req: Request,
    res: Response
): Promise<void> {

    try {

        const { competicao,atleta, value,unidade } = req.body

        if (!competicao || !atleta || !value || !unidade) {
            res.statusCode = 422
            throw new Error("competicao,atleta, value  and unidade required")
        }

        
        const [user] = await connection(userTableName)
            .where({ atleta })

        if (user) {
            res.statusCode = 409
            throw new Error(" atleta already in user ")
        }


        const id: string = generateId()


        await connection(userTableName)
            .insert({ id, competicao,atleta, value,unidade })
        const token: string = generateToken({ id })

        res.send({ token })

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error")
    }
}

