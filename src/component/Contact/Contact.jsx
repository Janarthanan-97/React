import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section id='contact'>
      <div className='contact-container'>
      <h4>CONTACT</h4>
      <div className='contact-div'>
        <div className='contact-left'>
          <a href='Tel:9876543210'><i class="fa-solid fa-phone-volume"></i><span>9876543210</span></a>
          <a href='mailto:email@gmail.com'><i class="fa-solid fa-envelope"></i><span>email@gmail.com</span></a>
        </div>
        {/* <div className='center-line'></div>
        <div className='contact-right'>
          <textarea name="" id="" cols="30" rows="10" placeholder='Write yor message here!!'></textarea>
          <button>Submit</button>
        </div> */}
      </div>
    </div>
    </section>
  )
}

export default Contact