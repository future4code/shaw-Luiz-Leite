import { Request, Response } from "express"
import connection from "../src/connection"
import { getTokenData } from "../src/services/authenticator"
import generateId from "../src/services/idGeneration";
import { recepiTableName } from "../src/types/types";

export default async function createCompetition(
    req: Request,
    res: Response
): Promise<void> {

    try {
        const token = req.headers.authorization
        const {typecompeticao, description} = req.body

        const tokenData = getTokenData(token!)

        if(!tokenData){
            res.statusCode = 401
            throw new Error ("Unautorized")
        }

        if(!typecompeticao|| !description){
            res.statusCode = 422
            throw new Error ("'typecompeticao' and decription 'requered'")
        }

        const id = generateId()
        const craetedAt = new Date()

    

        await connection (recepiTableName)
        .insert ({
            id,
            typecompeticao,
            description,
            created_at: craetedAt,
            author_id: tokenData!.id

        })

        res.send ("recipe sucessfuly created")


    } catch (error) {
        console.log(error.message);

        if (res.statusCode === 200) {
        res.status(500).send("Internal server error")
    } else {
        res.send (error.message)
    }
}
} 