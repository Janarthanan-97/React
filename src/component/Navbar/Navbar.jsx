import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav-container'>
        <h2>Company Name</h2>
        <div className='nav-link-container'>
            <a href='#home' >Home</a>
            <a href='#about' >About</a>
            <a href='#products' >Products</a>
            <a href='#contact' >Contact</a>
        </div>
    </div>
  )
}

export default Navbar