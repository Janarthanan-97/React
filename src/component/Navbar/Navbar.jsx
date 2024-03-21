import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav-container'>
      <h2>Sri Sai Industries</h2>
      <div className='nav-link-container '>
        <NavLink to='/' ><span className='icon'><i class="fa-solid fa-house"></i></span><div>Home</div></NavLink>
        <NavLink to='/about' ><span className='icon'><i class="fa-solid fa-circle-info"></i></span ><div>About</div></NavLink>
        <NavLink to='/products' ><span className='icon'><i class="fa-solid fa-cart-shopping"></i></span><div>Products</div></NavLink>
        <NavLink to='/contact' ><span className='icon'><i class="fa-solid fa-address-card"></i></span><div>Contact</div></NavLink>
      </div>
    </div>
  )
}

export default Navbar