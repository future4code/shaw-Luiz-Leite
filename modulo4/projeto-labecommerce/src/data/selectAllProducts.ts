import { productsData } from "../Types/typeProducts";
import  connection  from "./dataBase";

const productsType = (product:any)=>{

    const typeProduct:productsData = {
        id:product.id,
        name:product.name,
        price:product.price,
        image_url:product.image_url
    }
    return typeProduct

}



export default async function selectAllProducts():Promise<productsData[] | undefined>{

    const result = await connection("labecommerce_products")

    const AllProductsType = result.map((product)=>{
        return productsType(product)
    })

    return AllProductsType
}