import axios from "axios"; 


async function getPalantirHistoricalData(){
    try{
        const pltr = await axios.get("https://api.massive.com/v2/aggs/ticker/PLTR/range/1/month/2020-01-01/2026-12-01?adjusted=true&sort=asc&limit=120&apiKey=_FXd1patmf7slu379YpMeAtj8AecFJup"); 

        const statusCode = 200; 

        if(pltr.status !== statusCode){ 
            throw new Error(`The data could not be fetched from the given api because of the following error ${pltr.status}`); 
        }

        // Structure the Palantir OHLCV indicator for the project 
        let palantir_polygon_data = pltr.data; 


        console.log(palantir_polygon_data); 



        // console.log(pltr.data); 

    }
    catch(error){ 
        throw new Error("The given data could not be fetched from polygon in general");  

    }
}

getPalantirHistoricalData(); 


/*

async function getTeslaHistoricalData(){
    try{
        const tesla = await axios.get("https://api.massive.com/v1/open-close/TSLA/2023-01-09?adjusted=true&apiKey=_FXd1patmf7slu379YpMeAtj8AecFJup"); 

        const statusCode = 200; 

        if(tesla.status !== statusCode){ 
            throw new Error(`The data could not be fetched from the given api because of the following error ${pltr.status}`); 
        }

        let tesla_polygon_data = tesla.data; 


        console.log(tesla_polygon_data); 


    }
    catch(error){ 
        throw new Error("The given data could not be fetched from polygon in general");  

    }
}







async function runTechEquities(){
    try{
        getPalantirHistoricalData(); 
        getTeslaHistoricalData(); 

    }
    catch(error){ 
        throw new Error("Failed to get one or more equities data"); 

    }
}

runTechEquities(); 

*/ 