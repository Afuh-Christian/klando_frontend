/* eslint-disable react/prop-types */
import { useFormik } from "formik"
import FormGenerator from "../Utils/Components/FormGenerator"
import { useDispatch } from 'react-redux';
import { LoginUser, googleLogin, setEntry } from "../ReduxStore/AuthSlice";
import { ExternalLogin } from "../Utils/Components/ExternalLogin";
import { LoginSocialFacebook } from 'reactjs-social-login';
import { GoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const formData=[
    {id: 0 , name: "email" , label: "Email" , type:"email"}, 
    {id: 1 ,  name: "password" , label: "Password" , type:"password"}, 
]


function Auth_Login() {

    const navigate = useNavigate(); 

    const user_ = useSelector(state => state.auth_reducer.user_)

    const dispatch = useDispatch()
    const defautData = {
        email : "", 
        password : "", 
    }
    const formik = useFormik({
        initialValues: defautData,
    })

    useEffect(()=>{
        if(user_?.accessToken){
            navigate(-1)
            dispatch(setEntry(true))
        }
    }, [user_?.accessToken , dispatch])


  return (
    // <BackLayout>
    <div className="h-full py-10 px-5 flex flex-col justify-between  md:mx-auto md:w-96">
    <div className="w-full">
    <h1 className="text-center font-bold text-sign-color text-xl mb-3" >Login</h1>
       <FormGenerator formData={formData} formik={formik}/>
       </div>


       {/* <div onClick={()=> }>Set</div> */}
    <br /><br />

       {/* // Externals  */}
       <ExternalLogin dispatch={dispatch} title = "Sign In"/>
   <div className="text-center ">
       <h1 onClick={()=>{dispatch(LoginUser(formik.values))}} className="text-center font-bold text-color text-xl mb-3" >Continue</h1>
       <p className="text-xs">By proceeding, you consent to get calls , whatsapp or SMS messages, 
       included by 
           automated dialer, from klando and its affiliates. And you are Above 18 years .
       </p>
   </div>
  </div>
//   </BackLayout>
  )
}



export  default Auth_Login