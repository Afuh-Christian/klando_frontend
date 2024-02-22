import { useFormik } from "formik"
import FormGenerator from "../Utils/Components/FormGenerator"
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUser, setEntry } from "../ReduxStore/AuthSlice";
import { ExternalLogin } from "../Utils/Components/ExternalLogin";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const formData=[
    {id: 0 , name: "name" , label: "Name" , type:"text"} , 
    {id: 2 , name: "phoneNumber" , label: "Phone number" , type:"text"}, 
    {id: 1 , name: "email" , label: "Email" , type:"text"} , 
    {id: 3 , name: "password" , label: "Password" , type:"password"}, 
    {id: 4 , name: "repeatPassword" , label: "Repeat-Password" , type:"password"}, 
]

function Auth_SignUp() {
    const user_ = useSelector(state => state.auth_reducer.user_)
     const dispatch = useDispatch() 
     const navigate = useNavigate() 
    
    const defautData = {
        name : "" , 
        email : "" ,
        phoneNumber : "" , 
        password : "" , 
        repeatPassword : "" , 
    }
    const formik = useFormik({
        initialValues: defautData , 
    })

    useEffect(()=>{
        if(user_?.accessToken){
            navigate(-1)
            dispatch(setEntry(true))
        }
    }, [user_?.accessToken , dispatch])


  return (
   <div className="h-full py-10 px-5 flex flex-col justify-between md:mx-auto md:w-96">
     <div className="w-full">
     <h1 className="text-center font-bold text-sign-color text-xl mb-1" >Signup</h1>
        <FormGenerator formData={formData} formik={formik}/>
        </div>
        <ExternalLogin dispatch={dispatch} title = "Sign Up"/>
        {/* {ExternalLogin (dispatch  , "Sign Up")} */}
    <div className="text-center py-10">
        <h1 onClick={()=>{dispatch(RegisterUser(formik.values))}} className="text-center font-bold text-color text-xl mb-5">Continue</h1>
        <p className="text-xs">By proceeding, you consent to get calls , whatsapp or SMS messages , included by 
            automated dialer, from klando and its affiliates. And you are Above 18 years .
        </p>
    </div>

   </div>
  )
}

export default Auth_SignUp;
