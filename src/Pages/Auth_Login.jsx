/* eslint-disable react/prop-types */
import { useFormik } from "formik"
import FormGenerator from "../Utils/Components/FormGenerator"
// import BackLayout from "../Utils/Components/BackLayout";

const formData=[
    {id: 0 , name: "email" , label: "Email" , type:"email"} , 
    {id: 1 ,  name: "password" , label: "Password" , type:"password"}, 
]


function Auth_Login() {
    const defautData = {
        email : "", 
        password : "", 
    }
    const formik = useFormik({
        initialValues: defautData,
    })
  return (
    // <BackLayout>
    <div className="h-full py-10 px-5 flex flex-col justify-between">
    <div className="w-full">
    <h1 className="text-center font-bold text-sign-color text-xl mb-3" >Login</h1>
       <FormGenerator formData={formData} formik={formik}/>
       </div>
   <div className="text-center ">
       <h1 className="text-center font-bold text-color text-xl mb-3" >Continue</h1>
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