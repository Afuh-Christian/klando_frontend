import { FaFacebookF } from "react-icons/fa";
//import { FaXTwitter } from "react-icons/fa6";
import {  GoogleLogin } from '@react-oauth/google';
import {LoginSocialFacebook} from 'reactjs-social-login'
import { FcGoogle } from "react-icons/fc";
import { facebookLogin, googleLogin, setEntry } from "../../ReduxStore/AuthSlice";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export function ExternalLogin({dispatch , title}){

  const navigate = useNavigate(); 

  const user_ = useSelector(state => state.auth_reducer.user_)
  // useEffect(()=>{
  //   if(user_?.accessToken !== null) {
  //     navigate("/")
  //     console.log("done....")
  //   } 
  // }, [user_?.accessToken])

  // useEffect(()=>{
  //   console.log("Hello")
  //   // console.log(user_.data)
  // },[user_])


  return (
    <div className="grid grid-cols-1 gap-2">
  <div>
<div className="opacity-0 relative top-12">
<GoogleLogin
  onSuccess={credentialResponse => { 
    dispatch(googleLogin({credential:credentialResponse?.credential}))
    //console.log(credentialResponse?.credential)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
  width={"350px"}
/>
</div>
<div className=" w-full flex px-15 items-center p-4 shadow-sm rounded-sm text-md"><FcGoogle className="text-2xl"/> <div className="mx-auto">Google {title}</div> </div>
</div>



<LoginSocialFacebook 
appId="6580561298710158"
onResolve={(response) => {
  response?.data?.accessToken &&
  dispatch(facebookLogin({
    accessToken:response?.data?.accessToken , 
    email : response?.data?.email , 
    name : response?.data?.name , 
    photoUrl : response?.data?.picture?.data?.url 
  }))
 
}}
onReject={(error)=>{
  console.log(error)
}}
>
<div className="w-full flex px-15 items-center p-4 shadow-sm rounded-sm text-md hover:opacity-60 cursor-pointer"><FaFacebookF className="text-2xl text-blue-700"/> <div className="mx-auto">Facebook {title}</div> </div>
</LoginSocialFacebook>
    {/* <div className="w-full flex px-15 items-center p-4 shadow-sm rounded-sm text-md hover:opacity-60"><FaXTwitter className="text-2xl"/> <div className="mx-auto">X Sign in</div> </div> */}
</div>
  )
};