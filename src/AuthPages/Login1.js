



import "./Login.css"
import React, { useRef, useState } from 'react'
import { Formik } from "formik"

const Login =  () => {
  return(

    <div className="login__form">

     <form action="" >
    <h1>LOGIN</h1>
    <label htmlFor="username">Username</label>
    <input type="text" id = "username"/>
    <label htmlFor="passsword">Password</label>
    <input type="password" id= "password" />
    
    <button>Submit</button>
    
    </form> 
    </div>
    
    
    
    )
  }



export default Login