import { useEffect } from "react";
import DriverHomePage from "../Components/DriverHomePage"
import { useSelector } from 'react-redux';
import Cookies from "js-cookie";



function HomePage() {

  const user_ = useSelector(state => state.auth_reducer.user_)

  // useEffect(()=>{
  //   Cookies.set("clientKlandoRefreshToken" , user_?.refreshToken)
  // }, [user_])

  return (

<DriverHomePage/>
  
  )
}

export default HomePage