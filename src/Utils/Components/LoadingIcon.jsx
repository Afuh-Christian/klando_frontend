/* eslint-disable react/prop-types */
import React from 'react'
import { MdRefresh } from 'react-icons/md'
import { Audio } from 'react-loader-spinner'

export function LoadingIcon({color="rgba(98, 73, 141, 1)" , height = 0 }) {
return (

<Audio
height={80}
width={80}
radius="9"
color={color}
ariaLabel="loading"
wrapperStyle
// wrapperClass
/>

)
}

 
export function NetworkErrorResponse(
  {RetryFunction , height=500}
  ){
    return (
        <div
        style= {{height:height}}
         className=' d-flex flex-column align-items-center justify-content-center'>
       <div className=' text-danger fw-semibold'>  Error Connecting to Server</div>
       <div onClick={ () =>{ RetryFunction()}} className='btn btn-sm text-primary fw-semibold'>Retry<MdRefresh/></div>

           </div> 
    )
}