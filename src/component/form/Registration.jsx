import React, { useState } from 'react'
import './Index.css'
import axios from 'axios'

function Registration() {
    let [eMail, setEMail] = useState()

    let handleSubmit = async ()=>{
        let res = await axios.post(`${import.meta.env.VITE_URL}/register`, {eMail})
        console.log(eMail)
    }

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
    <div className='form-container'>
        <h3 style={{color:"var(--primary)"}}>Register for Portfolio</h3>
        <div style={{width:'max(25vw, 300px)'}}>
        <label>E-Mail</label>
        <input onChange={(e)=>{setEMail(e.target.value)}} />
      </div>
      <button onClick={handleSubmit} style={{marginTop:'10px'}} >Register</button>
    </div>
    </div>
  )
}

export default Registration