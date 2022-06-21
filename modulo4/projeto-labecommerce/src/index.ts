import * as express  from "express";
import {Express} from "express";
import * as cors from "cors";
import {AddressInfo} from "net";
import {Request, Response} from "express";
import createUser from "./endPoints/createUser";
import getUsers from "./endPoints/getUsers";
import createProducts from "./endPoints/createProducts";
import getProducts from "./endPoints/getProducts";
import createPurchases from "./endPoints/createPurchases";
import getPurchasesByUser from "./endPoints/getPurchasesByUser";


const app : Express = express()
app.use(express.json());
app.use(cors());

//Primeiro EndPoint (criar usuario)
app.post("/user",createUser)

//Segundo EndPoint (buscar todos os usuarios)
app.post("/user",getUsers)

//Terceiro EndPoint (criar um produto)
app.post("/products",createProducts)

//Quarto EndPoint (Buscar todos os produtos)
app.get("/products",getProducts)

//Quinto EndPoint (Registro de compra)
app.post ("/purchases", createPurchases)

//Sexto EndPoint (Busca das compras de um usuário)
app.get("/users/:userId/purchases",getPurchasesByUser)



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log (`server is running in http://localhost: ${address.port}`);
    } else {
        console.log (`Failure upon starting server.`);
    }
    
}); 