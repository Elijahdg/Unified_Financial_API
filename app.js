import express from "express"; 


const app = express(); 
const port = 3001; 

app.use(express.json());
app.use(express.urlencoded()); 


app.listen(port, ()=>{
    console.log(`The server is running on localhost${port}`); 
})
