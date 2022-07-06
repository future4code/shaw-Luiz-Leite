import { Request, Response } from "express"
import { FileWatcherEventKind } from "typescript";
import connection from "../../connection";
import { generateToken } from "../../services/authenticator";
import { generateHash } from "../../services/hashmanager";
import generateId from "../../services/IdGeneration";
import { userTableName } from "../../types";

export default async function signup(
    req: Request,
    res: Response
): Promise<void> {

    try {

        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.statusCode = 422
            throw new Error("name, email and password required")
        }

        if (password.length < 6) {
            res.statusCode = 422
            throw new Error("password must be at least 6 characters long")
        }

        const [user] = await connection(userTableName)
            .where({ email })

        if (user) {
            res.statusCode = 409
            throw new Error(" Email already in user ")
        }


        const id: string = generateId()

        const cypherPassword: string = generateHash(password)

        await connection(userTableName)
            .insert({ id, name, email, password: cypherPassword })
        const token: string = generateToken({ id })

        res.send({ token })

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error")
    }
}