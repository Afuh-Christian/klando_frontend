import { NavLink, Outlet, useLocation } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
// import TaxiAlertIcon from '@mui/icons-material/TaxiAlert';
import { SwipeableDrawer } from "@mui/material";
import  { useState } from "react";
import { BookOnline } from "@mui/icons-material";


const navList = [
    {title : "home" , icon : <HomeIcon/>  , path : "/"} , 
    // {title : "clients" , icon : <GroupsIcon/>  , path : "/clients"},
    // {title : "rides" , icon : <TaxiAlertIcon/>  , path : "/availableRides"},
    {title : "book ride" , icon : <BookOnline/>  , path : "/bookRide"},
    {title : "account" , icon : <PersonIcon/>  , path : "/account"},
]





function MainLayout() {
  const location = useLocation() 
  const [toggle , toggleDrawer] = useState(false)
  return (
    <>
          <SwipeableDrawer
            anchor={"left"}
            open={toggle}
            onClose={()=>toggleDrawer(!toggle)}
            onOpen={()=>toggleDrawer(!toggle)}
           className=""
          >
         <div className="w-full h-lvh bg-white">

          <div>sdflasdjfaksd</div>
         
         </div>
          </SwipeableDrawer> 

    <div className="h-screen flex flex-col">
     
            <Outlet/>
      
        <div className="py-2 flex border-t border-color-light">
           {
            navList.map(e => (
                 <div  key={e.title} className={` flex-1 text-color 
                 ${ [e.path].includes(location.pathname) && "opacity-50"}
                 text-center hover:opacity-50`}>
                <NavLink to={e.path}> {e.icon}
                <div className="text-xxs font-semibold">{e.title}</div>
                </NavLink>
            </div>
            ))
           } 
        </div>
    </div>
    </>
  )
}

export default MainLayout