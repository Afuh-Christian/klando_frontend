import { Modal } from "@mui/material"
import { useState } from "react"
// import { FaCheck } from "react-icons/fa";
// import {  MdOutlineClose } from "react-icons/md";


const rides = [
  { id: 1 ,from: "Bowie" , to: "virginia", carName : "Tesla" ,carPic: "car1.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:10 , capacity:7 , seatsLeft:2  , price:"30"}, 
  { id: 4 ,from: "Bowie" , to: "Washington DC", carName : "Toyota Rav 4" ,carPic: "toyota.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:4 , capacity:7 , seatsLeft:2  , price:"50"},
  { id: 14 ,from: "Bowie" , to: "virginia", carName : "Tesla" ,carPic: "car1.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:10 , capacity:7 , seatsLeft:2  , price:"30"}, 
  { id: 31 ,from: "Bowie" , to: "Washington DC", carName : "Toyota Rav 4" ,carPic: "toyota.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:4 , capacity:7 , seatsLeft:2  , price:"50"},
  { id: 32 ,from: "Bowie" , to: "Washington DC", carName : "Toyota Rav 4" ,carPic: "toyota.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:4 , capacity:7 , seatsLeft:2  , price:"50"},
  { id: 33 ,from: "Bowie" , to: "Washington DC", carName : "Toyota Rav 4" ,carPic: "toyota.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:4 , capacity:7 , seatsLeft:2  , price:"50"},
  { id: 34 ,from: "Bowie" , to: "Washington DC", carName : "Toyota Rav 4" ,carPic: "toyota.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:4 , capacity:7 , seatsLeft:2  , price:"50"},
  { id: 344 ,from: "Bowie" , to: "Washington DC", carName : "Toyota Rav 4" ,carPic: "toyota.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:4 , capacity:7 , seatsLeft:2  , price:"50"},
  { id: 35 ,from: "Bowie" , to: "Washington DC", carName : "Toyota Rav 4" ,carPic: "toyota.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:4 , capacity:7 , seatsLeft:2  , price:"50"},
  { id: 36 ,from: "Bowie" , to: "Washington DC", carName : "Toyota Rav 4" ,carPic: "toyota.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:4 , capacity:7 , seatsLeft:2  , price:"50"},
  { id: 37 ,from: "Bowie" , to: "Washington DC", carName : "Toyota Rav 4" ,carPic: "toyota.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:4 , capacity:7 , seatsLeft:2  , price:"50"},
  { id: 38 ,from: "Bowie" , to: "Washington DC", carName : "Toyota Rav 4" ,carPic: "toyota.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:4 , capacity:7 , seatsLeft:2  , price:"50"},
  { id: 355 ,from: "Bowie" , to: "Washington DC", carName : "Toyota Rav 4" ,carPic: "toyota.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:4 , capacity:7 , seatsLeft:2  , price:"50"},
  { id: 322 ,from: "Bowie" , to: "Washington DC", carName : "Toyota Rav 4" ,carPic: "toyota.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:4 , capacity:7 , seatsLeft:2  , price:"50"},
  { id: 323 ,from: "Bowie" , to: "Washington DC", carName : "Toyota Rav 4" ,carPic: "toyota.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:4 , capacity:7 , seatsLeft:2  , price:"50"},
  { id: 3182 ,from: "Bowie" , to: "Washington DC", carName : "Toyota Rav 4" ,carPic: "toyota.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:4 , capacity:7 , seatsLeft:2  , price:"50"},
  { id: 334 ,from: "Bowie" , to: "Washington DC", carName : "Toyota Rav 4" ,carPic: "toyota.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:4 , capacity:7 , seatsLeft:2  , price:"50"},
  { id: 523 ,from: "Bowie" , to: "Washington DC", carName : "Toyota Rav 4" ,carPic: "toyota.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:4 , capacity:7 , seatsLeft:2  , price:"50"},
  { id: 312 ,from: "Bowie" , to: "Washington DC", carName : "Toyota Rav 4" ,carPic: "toyota.jpg", departureTimeFrame: "7:00am - 7:30am" , timeLeft:4 , capacity:7 , seatsLeft:2  , price:"50"},
]



function AvailableRides() {
  const [open , setOpen] = useState(false) 
  function handleModal(){
    setOpen(!open)
  }
  return (
    <div className="h-full flex flex-col">
      <Modal
  open={open}
  onClose={handleModal}
  // aria-labelledby="modal-modal-title"
  // aria-describedby="modal-modal-description"
  className="grid place-items-center border-white"
>
  <div className="bg-white text-color rounded">
    <div className="font-bold text-xxl py-2 px-5 rounded-t img-color text-white ">Order</div>
    <div className="px-5 pt-3 flex flex-col gap-1">
      <div><span className="font-semibold">Pickup : </span><span>8329 Danny street</span></div>
      <div><span className="font-semibold">Destination : </span><span>873 okala </span>(<span className="text-blue-500">  Virginia</span>)</div>
      <div className="text-black opacity-50">12 minutes away</div>    
      <div className="text-end">50$ <span></span></div>
    </div>
    <div className="p-4 flex justify-between text-xs font-semibold text-white">
      <div className="cursor-pointer text-green-500 px-2 py-1 rounded-sm hover:opacity-50" 
      onClick={handleModal}
      >Accept 
      {/* <FaCheck fontSize={12} className="my-auto"/>  */}
      </div>
      <div className="cursor-pointer text-red-500 px-2 py-1 rounded-sm hover:opacity-50"
      onClick={handleModal}
      >Decline 
      {/* <MdOutlineClose fontSize={15} className="my-auto"/>  */}
      </div>
    </div>
  </div>
 
</Modal>

      <div className="border-b border-color px-3 py-4 text-color font-semibold tracking-wider">
      Available rides
      </div>
     
<div className="flex-1 overflow-y-scroll border-b border-color">
{
  rides.map(e => (
    <div onClick={handleModal} key={e.id} className="grid grid-cols-6 text-xxs font-semibold">
    <div className="p-2"><img src={e.carPic}/></div>
    <div className="py-2 col-span-3">
        <div>{e.carName}</div>
        <div><span>{e.from} to {e.to} </span><span> ({e.departureTimeFrame})</span></div>
        <div className="opacity-50">{e.timeLeft} min away</div>
    </div>
    <div className="py-2 m-auto">
        <div>{e.capacity} plc</div>
        <div>{e.seatsLeft} left</div>
    </div>
    <div className="py-2 m-auto">${e.price}</div>
</div>))
}
</div>

<div className="h-16 w-full">
  <div className="m-auto mt-4 text-xs tracking-wider img-color text-white w-max h-max py-2 px-10 rounded-sm hover:opacity-50">Confirm Rides</div>
</div>
   
    </div>
  )
}

export default AvailableRides