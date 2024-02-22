/* eslint-disable react/prop-types */
import { Modal } from "@mui/material"
import {  useLayoutEffect, useState } from "react"
import FormGenerator from "../Utils/Components/FormGenerator";
import { useFormik } from "formik";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Cookies from "js-cookie";


const tabs = [
    {label : "My Schedule" , id : 1 }, 
    {label : "My Orders" , id : 0 }, 
    {label : "Pending orders" , id : 2 }, 
]


const Orders = [
    {id: 1, path:"MaryLand - Virginia", date: "Tuesday 12/23/2014 7:30am", status:"5/7" },
    {id: 2, path:"MaryLand - Virginia", date: "Wednesday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
    {id: 0, path:"MaryLand - Virginia", date: "Friday 12/23/2014 7:30am", status:"5/7" },
]


function DriverHomePage() {
    const [open , setOpen ] = useState(); 
    function handleModal () {
        setOpen(!open);
    }

        /// getting window height .......
        const [dimension, setDimension] = useState({ width: 700, height: 700 })
        useLayoutEffect(() => {
            setDimension({width: window.innerWidth, height: window.innerHeight })
        },[dimension.width,dimension.height])

        

    const [tab , setTab] = useState(0)
  return (
    <>
    <Modal
    open={open}
    onClose={handleModal}
    className="grid place-items-center border-white"
    >
        <AddSchedule handleModal={handleModal}/>
  </Modal>
    <div 
    className="flex-1 grid grid-flow-col grid-rows-6 text-xs overflow-none">
        <div className="img-color">
            <img className="h-full mx-auto" src="logo.jpg" alt=""/>
        </div>
        <div className="py-5 w-full row-span-5 px-5 overflow-none grid grid-flow-row grid-rows-12">
           
          
                 <div className="flex justify-between items-center gap-2 pb-4">
                    {
                        tabs.map(e => (
                            <button onClick={()=>setTab(e.id)} key={e.id} className={`border border-color px-4 py-2 rounded-md font-bold h-fit
                            ${tab === e.id ? " img-color text-blue-50 opacity-75 " : "text-color"}
                            `}>
                    {e.label}
                </button>
                        ))
                    }
                 </div>

                 <div className="row-span-10 overflow-y-scroll">

                { tab === 1 && <div className="flex-1 overflow-y-scroll">
                   {Orders.map(e => (
                     <div key={e.id} className="font-bold my-4 grid gap-3 border-b border-color pb-2">
                     <div className="flex justify-between">
                         <div className="opacity-50">{e.date}</div>
                         <div className="text-red-800">{e.status}</div>
                     </div>
                     <div className="text-color text-sm">{e.path}</div>
                 </div>
                   ))}
                 </div>}
                 {
                    tab === 2 && <div ></div>
                 }
                 {
                    tab === 0 && <div className="h-full overflow-scroll">
                        <div>sdjkafklsdfj</div>
                        <div>sdjkafklsdfj</div>
                      

                    </div>
                 }
                  </div>

                 <div className="pt-5 grid place-items-center">
                    <button
                    onClick={handleModal}
                    className="border border-color px-6 py-2 rounded-md font-semibold h-fit
                             img-color text-white hover:opacity-50">Add Schedule</button>
                 </div>
         
        </div>
    </div>
    </>
  )
}

export default DriverHomePage


















const formData = [
    {id:0 , name: "pickupCoverage" , label:"Pickup Coverage"  , type:"text"} , 
    {id:1 , name: "dropOffCoverage" , label:"Drop off Coverage"  , type:"text"} , 
    {id:2 , name: "dateAndTime" , label:"Date And Time"  , type:"date"} , 
    {id:3 , name: "carryingCapacity" , label:"Carrying Capacity"  , type:"text"} , 
]

function AddSchedule({handleModal}){

    const formik = useFormik({
        initialValues: { }
    })
    return (
        <div className="h-screen w-screen  bg-white ">
         <div className="p-4 text-start"
         
         ><button onClick={handleModal}><ArrowBackIcon/></button></div>
         <div className="text-color font-bold  text-center my-4" >New Schedule</div>
         <div className="p-5">
            <FormGenerator formik={formik} formData={formData}/>
         </div>

         <div className="grid">
                    <button
                    // 
                    className="mx-auto mt-4 border border-color px-10 py-2 rounded-md font-semibold 
                            tracking-wider img-color text-white hover:opacity-50">Submit</button>
                 </div>
        </div>
    )
}