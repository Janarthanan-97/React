import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav-container'>
      <h2>Company Name</h2>
      <div className='nav-link-container'>
        <a href='#home' ><span className='icon'><i class="fa-solid fa-house"></i></span><div>Home</div></a>
        <a href='#about' ><span className='icon'><i class="fa-solid fa-circle-info"></i></span ><div>About</div></a>
        <a href='#product' ><span className='icon'><i class="fa-solid fa-cart-shopping"></i></span><div>Products</div></a>
        <a href='#contact' ><span className='icon'><i class="fa-solid fa-address-card"></i></span><div>Contact</div></a>
      </div>
    </div>
  )
}

export default Navbar