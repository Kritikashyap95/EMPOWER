import React from 'react'
import "./OTP.css"
import { useRef } from 'react'

const OTP = ({count, ...rest}) => {
  return (<div className='OTP'>

 <label htmlFor="">{rest.label} <sup>*</sup></label>

 <div className='OTP__texts'>
 {
        Array.from({length:count}).map((elem,index) =>{
           return <input  key = {index}type="text" maxLength={1}  onChange={(e) => {rest.onChangeHandler(e.target.value, index)}}/>
        })
    }

 </div>

    
  </div>
  )
}

export default OTP