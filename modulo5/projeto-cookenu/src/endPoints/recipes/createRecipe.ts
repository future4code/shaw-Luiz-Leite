import { Request, Response } from "express"
import connection from "../../connection";
import { getTokenData } from "../../services/authenticator";
import generateId from "../../services/IdGeneration";
import { recepiTableName } from "../../types";

export default async function createRecipe(
    req: Request,
    res: Response
): Promise<void> {

    try {
        const token = req.headers.authorization
        const {title, description} = req.body

        const tokenData = getTokenData(token!)

        const id = generateId()
        const craetedAt = new Date()

        await connection (recepiTableName)
        .insert ({
            id,
            title,
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