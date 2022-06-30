import * as express from "express";
import { Express } from "express";
import * as cors from "cors";
import * as dotenv from 'dotenv';
import { AddressInfo } from "net";

dotenv.config();




   const app: Express = express();
app.use(express.json());
app.use(cors());
const server = app.listen(process.env.PORT || 3003, () => {
if (server) {
 const address = server.address() as AddressInfo;
 console.log(`Server is running in http://localhost:
${address.port}`);
} else {
 console.error(`Failure upon starting server.`);
}
});