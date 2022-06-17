import * as express  from "express";
import {Express} from "express";
import * as cors from "cors";
import {AddressInfo} from "net";


const app : Express = express()
app.use(express.json());
app.use(cors());


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log (`server is running in http://localhost: ${address.port}`);
    } else {
        console.log (`Failure upon starting server.`);
    }
    
}); 