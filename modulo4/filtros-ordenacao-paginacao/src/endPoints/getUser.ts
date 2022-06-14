import { Request, Response } from "express"


export const getUser = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }
//a) Crie uma cópia do endpoint acima, e altere-o para que 
//ele possa receber um parâmetro de filtragem por nome. 
//Este nome deve ser enviado por query params.

