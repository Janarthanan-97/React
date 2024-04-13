import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <section id='contact'>
      <div className='contact-container'>
        <h4>Sri Sai Industries</h4>
        <div className='contact-nav'>
          <Link to='/'>Home</Link> <span>/</span> <span>Contact</span>
        </div>
      </div>
    </section>
  )
}

export default Contact