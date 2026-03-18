import express from "express"; 
import dotenv from "dotenv";
import { TigerConnect } from "./Database/TigerCloudConnect.js";

const app = express(); 
const port = 3001; 

app.use(express.json());
app.use(express.urlencoded()); 

dotenv.config();
const DBclient = TigerConnect();

app.listen(port, ()=>{
    console.log(`The server is running on localhost:${port}`); 
})
