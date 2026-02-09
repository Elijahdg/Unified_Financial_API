import axios from "axios"; 



async function treasuaryYields(){ 
    try{
        const response = await axios.get("https://api.massive.com/fed/v1/treasury-yields?limit=100&sort=date.asc&apiKey=_FXd1patmf7slu379YpMeAtj8AecFJup");

        if(!response){ 
            throw new Error("The treasuary yield data could not be acheived from polygon"); 
        }

        console.log(response.data); 
    }
    catch(error){ 
        throw new Error("The polygon api did not fetch the given data"); 

    }
}

treasuaryYields(); 

