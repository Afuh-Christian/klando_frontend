/* eslint-disable react/prop-types */
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Outlet, useNavigate } from 'react-router-dom';

export function BackForm({onClick=null , name , children}){
    const navigate = useNavigate(); 
    function Goback(){
         navigate(-1)
    }

    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <div className=" flex flex-row justify-between p-5 shadow-sm text-color">
                <div className="" 
                onClick={onClick??Goback}
                ><ArrowBackIcon/></div>
                <h1 className=" font-bold">{name}</h1>
            </div>
           
           {children}
          
        </div>
    )
}
function BackLayout(){
    const navigate = useNavigate(); 
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <div className=" flex flex-row justify-between p-5 shadow-sm text-color">
                <div className="" onClick={()=>navigate(-1)}><ArrowBackIcon/></div>
                <h1 className=" font-bold">Klando</h1>
            </div>
            <div className="flex-1 overflow-y-scroll">
            <Outlet/>
            </div>
        </div>
    )
}
export default BackLayout