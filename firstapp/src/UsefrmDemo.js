import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import './usefrmdemocss.css'
import { Link } from 'react-router-dom'
function Demo() {
  const[name1,setName1]=useState('')
  const[email,setEmail]=useState('')
  const[pass,setPass]=useState('')
  const handlePost=()=>{
    // fetch("http://localhost:3001/data",{
    //   method:'POST',
    //   // headers:{'Content-Type': 'application/json'},
    //   body:JSON.stringify({name1,email})
    // })
    axios.post("http://localhost:3001/signup",{name1,email,pass})
    .then(()=>{
      alert("Your data has been Entered.Please Login to proceed")
      setName1('')
      setEmail('')
      setPass('')
    })
    .catch((err)=>{
      alert(`Error ${err}`)
    })
  }
  return (
    <div>
      {/* Name:<input type='text' placeholder='Enter name' value={name1} onChange={(e)=>setName1(e.target.value)}></input><br></br><br></br>
      Email:<input type='text' placeholder='Enter E-mail' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br><br></br>
      <button onClick={handlePost}>SUBMIT</button> */}
      <div class="signup-container"><br></br>
        <h2>Sign Up</h2>
        <form><br></br>
        <label for="name">Full Name</label>
        <input type="text" value={name1} onChange={(e)=>setName1(e.target.value)} placeholder='Enter your Name' required></input><br></br><br></br>

        <label for="email">Email Address</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email' required></input><br></br><br></br>

        <label for="password">Password</label>
        <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='Enter your password' required></input><br></br>

        <button onClick={handlePost}>Sign Up</button><br></br>
        </form><br></br>
        <p>Already have an account? <Link to="/login">Log in here</Link>.</p>

      </div>

    </div>
  )
}

export default Demo