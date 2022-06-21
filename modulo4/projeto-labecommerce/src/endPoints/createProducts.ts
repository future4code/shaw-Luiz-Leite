import {Request, Response} from "express";
import insertProduct from "../data/insertProduct";
import { productsData, productsInsert } from "../types/typeProducts";


export default async function createProducts (req:Request , res:Response) {
    try {
        const {name,price, image_url}: productsInsert = req.body

        if (!name || !price || !image_url){
            throw new Error ("os valores de name, price e image devem ser passados")
        }
        const productsData:productsData = {
            id:Date.now().toString(),
            name,
            price,
            image_url

        }
        const anwser = await insertProduct (productsData)
        res.status(201).send({message:anwser})

    }
    catch (error:any) {
        res.status(500).send ({message:error.message})
        
    }
}