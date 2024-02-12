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
// Object.keys(routeParams)[0]}=${routeParams[Object.keys(routeParams)[0]]
    try {
        const response =
            routeParams && postData ? await axios[httpMethod](`${mainRoute}${path}?${str}` , postData ) :
            postData? await axios[httpMethod](`${mainRoute}${path}` , postData ) :
            routeParams? await axios[httpMethod](`${mainRoute}${path}?${str}`) :
            await axios[httpMethod](`${mainRoute}${path}`)
        return response
    }catch(err){
        return  {error_obj : err}
    }
}
