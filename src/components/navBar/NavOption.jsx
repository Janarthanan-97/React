import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function NavOption() {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login')
  }

  return (
    <div className='navopt-div'>
      <div className='nav-list'>
        <div><NavLink to='/' className='nav-link'><span className='ms-5'>Home</span></NavLink></div>
        <div><NavLink to='/bill' className='nav-link'><span className='ms-5'>Bill Item</span></NavLink></div>
        <div><NavLink to='/all-item' className='nav-link'><span className='ms-5'>Stock</span></NavLink></div>
        <div><NavLink to='/add-stock' className='nav-link'><span className='ms-5'>Create Item</span></NavLink></div>
        <div><NavLink to='/orders' className='nav-link'><span className='ms-5'>Search Bill</span></NavLink></div>

        <div className='logout-div' onClick={handleLogout}><span className='ms-5'>Logout</span></div>

      </div>
    </div>
  )
}

export default NavOption