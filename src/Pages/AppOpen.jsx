/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import EntrySignBtn from "../Utils/Components/EntrySignBtn"

function AppOpen() {
    const navigate = useNavigate()
  return (
    <div className="h-screen flex flex-col md:flex-row md:p-40">
    <div className="w-full flex-1 grid place-items-center img-color
    "><img className="w-full" src="/logo.jpg"/></div>
    <div className="w-full md:w-2/3 flex-1 pt-6">
       {[{title : "Sign Up Now" , onClick : () => {
        navigate("signUp");
       }} ,{title : "Log in" , onClick : () => {
        navigate("login");
       }}
     ].map(e => <EntrySignBtn key={e.title} title={e.title} onClick={e.onClick}/>)}
     {/* <div className="">ehdafsd</div> */}
    </div>

  
    </div>
  )
}
export default AppOpen



