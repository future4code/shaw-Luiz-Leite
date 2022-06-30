import { Request, Response } from "express"

export async function singup (req: Request, res: Response) {
    try{

    } catch (error){
        res.status(400).send (error.message);

    }
}