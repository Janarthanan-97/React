import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function UserInfo() {
  const navigate = useNavigate()
  const [email, setEmail] = useState(localStorage.getItem('email'))


  const handleLogout = () => {
    localStorage.clear();
    navigate('/login')
  }
  return (
    <div className='user-info'>
      <h5 style={{ background: '#276221', padding: '15px', borderRadius: '7px' }}>{email}</h5>
      <div className='logout-btn'> <Button variant="danger" onClick={handleLogout}>Logout</Button></div>
    </div>
  )
}

export default UserInfo