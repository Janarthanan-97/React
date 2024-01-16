import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NavOption() {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login')
  }

  return (
    <div className='navopt-div'>
      <div className='nav-list'>
        <div><Link to='/' className='nav-link active'><span className='ms-5'>Stock</span></Link></div>
        <div><Link to='/bill' className='nav-link active'><span className='ms-5'>Bill</span></Link></div>
        <div><Link to='/all-item' className='nav-link active'><span className='ms-5'>All Items</span></Link></div>
        <div><Link to='/add-stock' className='nav-link active'><span className='ms-5'>Add Item</span></Link></div>
        <div><Link to='/orders' className='nav-link active'><span className='ms-5'>Orders</span></Link></div>

        <div className='logout-div' onClick={handleLogout}><span className='ms-5'>Logout</span></div>

      </div>
    </div>
  )
}

export default NavOption