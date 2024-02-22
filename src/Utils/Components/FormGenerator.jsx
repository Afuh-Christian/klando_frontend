/* eslint-disable react/prop-types */

// border-sign-color
// text-sign-color
function FormGenerator({formData , formik}) {
   return  formData?.map(form => {
    if(["text", "checkbox" , "email" , "password" , "date" , "number"].includes(form.type)){
        return <div key={form?.id} className="p-2 text-color">
            <div className="text-color pb-2" >{form?.label}</div>
            <div><input className="border rounded-xl text-black w-full ps-2 py-1 
            focus:shadow-xl shadow-gray-600 
            "   type={form.type} name={form.name} onChange={formik.handleChange} value={formik.values[form.name]}/></div>
        </div>
    }else if(["select"].includes(form.type)){
        return "hello"
    }
   } )
}
export default FormGenerator