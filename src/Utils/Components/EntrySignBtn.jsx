/* eslint-disable react/prop-types */
import EastIcon from '@mui/icons-material/East';


export default function EntrySignBtn({title , onClick}){
    return (
        <div onClick={onClick} className=" text-color font-normal text-xl border-b border-color flex justify-between 
         pb-7 cursor-pointer my-10 mx-10 hover:mx-8 hover:my-8 px-2 hover:shadow-xl shadow-gray-600
         
        ">
        <div className='font-semibold'>{title}</div>
        <div><EastIcon/></div>
    </div>
    )
}