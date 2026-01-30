import express from "express"; 


const app = Express(); 



app.use(express.json()); 

port = 3001; 

app.listen(port, ()=>{
    console.log(`The server is running on localhost${port}`); 
})
