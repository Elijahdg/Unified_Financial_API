import app from "app.js"; 
import Router from "equities_router.js"; 
import Router from "options_router.js"; 


const constructorMethod = async() =>{
    app.use("/equitiesRouter"); 
    app.use("/optionsRouter"); 

    app.use(/(.*)/, (req, res) => {
    return res.status(404).json({error: 'Not found'});
    });
}


export default construccltorMethod; 