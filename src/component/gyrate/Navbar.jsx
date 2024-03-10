import React from 'react'

function Navbar() {
  return (
    <header className='header'>
        <a href='#' className='logo'>Portfolio</a>
      <nav className='navbar'>
        <a href='#home' style={{"--i":1}} >Home</a>
        <a href='#about' style={{"--i":2}}>About</a>
        <a href='#service' style={{"--i":3}}>Skill</a>
        <a href='#portfolio' style={{"--i":4}}>Portfolio</a>
        <a href='#experience' style={{"--i":5}}>Experience</a>
        <a href='#contact' style={{"--i":6}}>Contact</a>
      </nav>
    </header>
  )
}

export default Navbar