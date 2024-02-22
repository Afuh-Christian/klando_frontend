import axios from "axios"

const mainRoute = "https://localhost:7000/"
export async function api_Request_Response( httpMethod , path , postData , routeParams ){

if(routeParams){
    var paramsArray = Object.keys(routeParams) 
    var paramsLength = paramsArray.length; 
    var str = ""; 
    
    for(let i = 0 ; i<paramsLength ; i++)
    {
        if(i === (paramsLength-1)){
         str += paramsArray[i] + "=" +  routeParams[paramsArray[i]]
        }else{
         str += paramsArray[i] + "=" +  routeParams[paramsArray[i]] + "&"
      }
    }
}


const Appheaders = {
    headers: {
        'Content-Type': 'application/json'
    
    }
}



// Object.keys(routeParams)[0]}=${routeParams[Object.keys(routeParams)[0]]
    try {
        const response =
            routeParams && postData ? await axios[httpMethod](`${mainRoute}${path}?${str}` , postData  , Appheaders) :
            postData? await axios[httpMethod](`${mainRoute}${path}` , postData   , Appheaders) :
            routeParams? await axios[httpMethod](`${mainRoute}${path}?${str}`  , Appheaders) :
            await axios[httpMethod](`${mainRoute}${path}`  , Appheaders)
        return response
    }catch(err){
        return  {error_obj : err}
    }
}






