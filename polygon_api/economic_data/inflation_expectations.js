import axios from "axios"; 



async function getInflationExpectations(){ 
    try{
        const inflationdata = await axios.get("https://api.massive.com/fed/v1/inflation-expectations?limit=100&sort=date.asc&apiKey=_FXd1patmf7slu379YpMeAtj8AecFJup"); 

        if(!inflationdata){ 
            throw new Error("The given inflationary data did not return from polygon.io"); 
        }


        const inflation_expectations = inflationdata.data; 
        

        // JSON Return on expected inflation 
        ```
        {
            date: '1990-03-01',
            model_1_year: 3.9925158,
            model_5_year: 4.077403,
            model_10_year: 3.9572842,
            model_30_year: 3.5948927
        },

        ```

        console.log(inflation_expectations); 

    }
    catch(error){ 
        throw new Error("The given inflationary data did not return from polygon.io"); 

    }
}


getInflationExpectations(); 