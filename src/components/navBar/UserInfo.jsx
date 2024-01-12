import React from 'react'
import Button from 'react-bootstrap/Button';

function UserInfo() {
    const handleLogout = ()=>{
        console.log("logout")
    }
  return (
    <div style={{height:'30%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'2rem'}}>
        <h5 style={{background:'#276221', padding:'15px', borderRadius:'7px'}}>jana@gmail.com</h5>
       <div> <Button variant="danger" onClick={handleLogout}>Logout</Button></div>
    </div>
  )
}

export default UserInfo