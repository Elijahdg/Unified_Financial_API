import example_getStocksOpenClose from './options_router';
import express from "express"; 
const Router = express.Router(); 


Router
    .route('/getOptions')
    .get(async(req,res)=>{
        try{
            example_getStocksOpenClose();
        }
        catch(error){ 

        }
    });

export default Router; 