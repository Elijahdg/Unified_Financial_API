import axios from "axios"; 

async function LabourData() {
    try{ 
        const lbMetrics = await axios.get("https://api.massive.com/fed/v1/labor-market?limit=200&sort=date.asc&apiKey=_FXd1patmf7slu379YpMeAtj8AecFJup"); 

        if(!lbMetrics){ 
            throw new Error("The given metrics are not available for labour"); 

        }

        console.log(lbMetrics.data); 


    }
    catch(error){ 
        throw new Error('The given api could not fetch labour market data'); 


    }
}


LabourData();