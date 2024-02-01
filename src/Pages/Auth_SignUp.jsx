import { useFormik } from "formik"
import FormGenerator from "../Utils/Components/FormGenerator"


const formData=[
    {id: 0 , name: "name" , label: "Name" , type:"text"} , 
    {id: 1 , name: "email" , label: "Email" , type:"email"} , 
    {id: 2 , name: "phoneNumber" , label: "Phone number" , type:"text"}, 
    {id: 3 , name: "password" , label: "Password" , type:"password"}, 
    {id: 4 , name: "repeatPassword" , label: "Repeat-Password" , type:"password"}, 
]

function Auth_SignUp() {
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

  return (
   <div className="h-full py-10 px-5 flex flex-col justify-between">
     <div className="w-full">
     <h1 className="text-center font-bold text-sign-color text-xl mb-3" >Signup</h1>
        <FormGenerator formData={formData} formik={formik}/>
        </div>
    <div className="text-center ">
        <h1 className="text-center font-bold text-color text-xl mb-3" >Continue</h1>
        <p className="text-xs">By proceeding, you consent to get calls , whatsapp or SMS messages , included by 
            automated dialer, from klando and its affiliates. And you are Above 18 years .
        </p>
    </div>

   </div>
  )
}

export default Auth_SignUp;
