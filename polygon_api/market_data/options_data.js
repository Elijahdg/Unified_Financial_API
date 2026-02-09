import axios from "axios"




async function getOptionsData(){ 
    try{ 
        const  response  = await axios.get("https://api.massive.com/v3/reference/options/contracts?order=asc&limit=10&sort=ticker&apiKey=_FXd1patmf7slu379YpMeAtj8AecFJup"); 

        if(!response){ 
            throw new Error("The given data from polygon did not return and is empty"); 

        }


        console.log(response.data); 

    }
    catch(error){
        throw new Error("The given api from polygon did not return any options market data"); 

    }
}


getOptionsData(); 