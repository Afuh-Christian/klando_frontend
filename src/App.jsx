/* eslint-disable react/jsx-no-target-blank */

// import AppOpen from "./Pages/AppOpen"
// import Auth_Login from "./Pages/Auth_Login"

// import { Button } from "@mui/material"
// import { Counter } from "./Pages/Counter"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppOpen from './Pages/AppOpen';
import Auth_Login from './Pages/Auth_Login';
import Auth_SignUp from './Pages/Auth_SignUp';
import MainLayout from './Utils/Components/MainLayout';
import HomePage from './Pages/HomePage';
import BackLayout from './Utils/Components/BackLayout';
import Page404 from './Pages/Page404';
import ClientsPage from './Pages/ClientsPage';
import AccountPage from './Pages/AccountPage';
import AvailableRides from './Pages/AvailableRides';
import BookRide from './Pages/BookRide';
import { useSelector } from 'react-redux';
import { LoadingIcon } from './Utils/Components/LoadingIcon';
import { useDispatch } from 'react-redux';
import { useEffect, useMemo, useRef } from 'react';
import Cookies from 'js-cookie';

import { RefreshUser, setEntry } from './ReduxStore/AuthSlice';



function App() {
 const entry =  useSelector(state => state.auth_reducer.entry)
 const dispatch = useDispatch() 
 const user_ = useSelector(state => state.auth_reducer.user_)
 const network_status = useSelector(state => state.auth_reducer.network_status)
 const runOnce = useRef(false)

 const LoadPage = useMemo(()=>{
  if(network_status.refresh === "fulfilled"){
    return RouterPage(entry)
  }else {
    return (
      <div className="w-full h-screen grid place-content-center">
<LoadingIcon/>
</div>
    )
  }
 } , [network_status.refresh , entry])


    useEffect(()=>{
      // console.log(Cookies.get("clientKlandoRefreshToken"))
      if(runOnce.current === false){
        console.log(!user_?.refreshToken)
        console.log(!([undefined , null ].includes(Cookies.get("clientKlandoRefreshToken"))))
      if(!user_?.refreshToken && !([undefined , null ].includes(Cookies.get("clientKlandoRefreshToken")))){
        console.log("dispatch functions") 
        dispatch(RefreshUser({token: Cookies.get("clientKlandoRefreshToken")}))
      }
        return () => {
          runOnce.current = true 
         }
      }
    },[runOnce , user_?.refreshToken])

    useEffect(()=>{
      if(network_status.refresh === "fulfilled" && user_.accessToken){
         dispatch(setEntry(true))
      }
    } , [network_status.refresh])

// if(network_status.refresh === "pending") return <LoadingIcon/>
// const network_status = useSelector(state => state.auth_reducer.network_status)
// if(network_status.refresh === "pending") return (<div className="w-full h-screen grid place-content-center">
// <LoadingIcon/>
// </div>)

  return (
   <>
   {LoadPage}
   </>
  )
}



function RouterPage(entry){
  return (  <> 
<BrowserRouter basename = '/'>
 <Routes>
   {
     entry ?
     <Route path='/' element={  <MainLayout />}>
     <Route index element={ <HomePage /> } />
     <Route path='clients' element={<ClientsPage />} />
     <Route path='account' element={<AccountPage />} />
     <Route path='availableRides' element={<AvailableRides />} />
     <Route path='bookRide' element={<BookRide />} />
     {/* <Route path='products' element={<Products />} /> */}
     {/* <Route path='products/:productId' element={<SingleProduct />} /> */}
     {/* <Route path='*' element={<Error />} /> */}
   </Route>
    : 
   <>
    <Route path='/' element = {<AppOpen/>}/>
    <Route  element = {<BackLayout/>}>
    <Route path='signUp' element = {<Auth_SignUp/>}/>
    <Route path='login' element = {<Auth_Login/>}/>
    </Route>
    </>
   } 
    <Route path='*' element = {<Page404/>}/>
 </Routes>
</BrowserRouter>
</>
  )
}



export default App
