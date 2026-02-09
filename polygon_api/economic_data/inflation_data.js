import axios from "axios"; 


async function inflationaryData(){ 
    try{
        const inflationMetric = await axios.get("https://api.massive.com/fed/v1/inflation?limit=100&sort=date.asc&apiKey=_FXd1patmf7slu379YpMeAtj8AecFJup"); 

        if(!inflationMetric){ 
            throw new Error("The inflationary historical data could not be fetched"); 
        }

        let inflationary_data = inflationMetric.data; 

        ```


        ```

        console.log(inflationary_data); 

    }
    catch(error){ 
        throw new Error("The data could not be fetched through polygon"); 

    }
}


inflationaryData(); 