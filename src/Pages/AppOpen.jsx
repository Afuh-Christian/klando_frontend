/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import EntrySignBtn from "../Utils/Components/EntrySignBtn"
import { useSelector } from 'react-redux';
import { LoadingIcon } from "../Utils/Components/LoadingIcon";
import { api_Request_Response } from "../ReduxStore/Api_Utils/Api_Request_Response";
import  axios  from 'axios';
import { Password } from "@mui/icons-material";
import Cookies from "js-cookie";
function AppOpen() {

    const navigate = useNavigate()
//     const dispatch = useDispatch() 



 const network_status = useSelector(state => state.auth_reducer.network_status)
 if(network_status.refresh === "pending") return (<div className="w-full h-screen grid place-content-center">
<LoadingIcon/>
 </div>)

  return (
    <div className="h-screen flex flex-col md:flex-row md:p-40">
    <div className="w-full flex-1 grid place-items-center img-color
    ">
      <img className="w-full" src="/logo.jpg"/>
      </div>

   <div><br /><br />
 
   </div>

    <div className="w-full md:w-2/3 flex-1 pt-6">
       {[{title : "Sign Up Now" , onClick : () => {
        navigate("signUp");
       }} ,{title : "Log in" , onClick : () => {
        navigate("login");
       }}
     ].map(e => <EntrySignBtn key={e.title} title={e.title} onClick={e.onClick}/>)}
    </div>
    </div>
  
  )
}
export default AppOpen