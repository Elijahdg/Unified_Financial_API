import dotenv from "dotenv"; 
import axios from "axios"; 
// dotenv.config(); 



async function getEquityData(){ 
    try{ 
      const response = await axios.get("https://api.massive.com/v3/reference/tickers?market=stocks&active=true&order=asc&limit=100&sort=ticker&apiKey=_FXd1patmf7slu379YpMeAtj8AecFJup");
        
      
      if(!response.data){ 
        throw new Error("The equity data url is not returning"); 

      }
      
     const equitiesObject = {}; 
     const equityHoldings = []; 
      /*
      for(let i = 0; i < response.data; i++){
        let current_stock = response.data['ticker'][i]; 

        equitiesObject.append(current_stock); 



        
        
      }
      */ 

      console.log(response.data); 
      // console.log(equityHoldings); 
      // console.log(equitiesObject); 

      

    }
    catch(error){ 
      throw new Error("The request to the polygon server was not successful"); 
    }

}
getEquityData(); 






