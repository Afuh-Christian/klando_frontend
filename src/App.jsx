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


function App() {

  const user = 
   null 
  //  {name: "afuh"} 
   ; 
  return (
    <> 
     <BrowserRouter basename = '/'>
      <Routes>
        {
          user?.name ? 
          <Route path='/' element={  <MainLayout />}>
          <Route index element={ <HomePage /> } />
          <Route path='clients' element={<ClientsPage />} />
          <Route path='account' element={<AccountPage />} />
          <Route path='availableRides' element={<AvailableRides />} />
          <Route path='bookRide' element={<BookRide />} />
          {/* <Route path='products' element={<Products />} /> */}
          {/* <Route path='products/:productId' element={<SingleProduct />} /> */}
          {/* <Route path='*' element={<Error />} /> */}
        </Route> : 
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
