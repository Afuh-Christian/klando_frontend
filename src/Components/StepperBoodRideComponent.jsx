import * as React from 'react';
// import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Modal } from '@mui/material';
import { BackForm } from '../Utils/Components/BackLayout';
import FormGenerator from '../Utils/Components/FormGenerator';
import { useFormik } from 'formik';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';// import PersonIcon from '@mui/icons-material/Person';

const steps = [
  {
    label: 'Pickup Location',
    formData: [
        { id:0,  label:'Pickup Location' , name: "pickupLocation", type: "text" },

    ], 
     
  },
  {
    label: 'Drop Off Location',
    formData: [
        { id:1, label:'Drop Off Location' , name: "dropOffLocation", type: "text" },
    ], 
   
  },
  {
    label: 'Date and Time',
    formData: [
        { id:2, label:'Date and Time' , name: "dateAndTime", type: "date" },
    ], 
    
  },
];


export default function StepperBoodRideComponent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [open , setOpen] = React.useState(false) 
  function handleModal(){
    setOpen(!open)
  }

  const defautData = {

}
const formik = useFormik({
    initialValues: defautData,
})
// console.log(formik.values)

const submitDisable = activeStep !== steps.length ? true : false ; 

  return (
  <>
<Modal
  open={open}
  onClose={handleModal}
  className="grid place-items-center border-white">
    <div className='h-screen w-screen bg-white'>
    <BackForm onClick={handleModal} name={steps[activeStep]?.label}>
<div className='m-5'>
    <FormGenerator formData={steps[activeStep]?.formData} formik={formik}/>
    <div className='pt-5 flex justify-between font-semibold text-color'>
    {activeStep!==0 && <div className='flex cursor-pointer'
    onClick={()=>{
        if(activeStep===0){return;}
        else{setActiveStep((prevStep)=> prevStep -1)}
    }}
    ><ChevronLeftIcon/><div className=''>Back</div></div>}
    <div className={`flex ${activeStep===0 && "ms-auto" }  cursor-pointer`}
      onClick={()=>{
        setActiveStep(activeStep+1)
        if(activeStep === steps.length-1){
            setOpen(!open)}
    }}
    ><div>{activeStep === steps.length - 1 ? "Finish" : "Next" }</div><NavigateNextIcon/></div>
    </div>
    </div>

    </BackForm>
    </div>
    </Modal>
    <div >
      <Stepper
      activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step 
           className='cursor-pointer'
          key={step.label}
          sx={{
            '& .MuiStepLabel-root .Mui-completed'
            : {
                color:'#614e88', 
                textEmphasisColor:"black"
            },
            '& .MuiStepLabel-root .Mui-active': {
              color: '#614e88', // circle color (ACTIVE)
            },
           height: 50
          }}
          >
            <StepLabel 
            onClick={() => {
                if(index <= activeStep){
                    setActiveStep(index)
                    handleModal()
                }
            }}>
              <div className='text-black text-sm w-full'>
                <div>{step.label}</div>
                <hr className={`relative top-2 ${index === activeStep && "img-color"} `}/>
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    <button className={`w-full  ${submitDisable ? "bg-gray-300" : "img-color"} text-white py-2 px-3 mt-10 rounded-sm tracking-wider `} disabled={submitDisable}>Submit</button>
    </div>
    </>
  );
}