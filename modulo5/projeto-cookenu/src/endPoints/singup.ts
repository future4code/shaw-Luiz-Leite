import { Request, Response } from "express"
import { IdGeneration } from "../services/IdGeneration";

export async function singup (req: Request, res: Response) {
    try{
    const {name,email,password,role}=req.body

    if (!name || !email || !password || !role){
        res.status(400).send ("Insira corretamente as informações de 'name','email','password'e 'role'")
    }
    const idGeneration = new IdGeneration();
    const id = idGeneration.generate;

    } catch (error){
        res.status(400).send (error.message);

    }
}