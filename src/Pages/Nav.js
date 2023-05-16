import React, { useState } from 'react'
import "./Nav.css"

const Nav = () => {
  const [login,setlogin]=useState(false);
  const [disabled, setdisabled]=useState (false);

  return (
    <div className='NavBar'>
        <h1>Empower </h1>
        <button className='loginbtn'>Login</button>
        
    </div>
  )
}

export default Nav