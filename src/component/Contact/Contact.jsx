import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import i from '../Image/BACKGROUND.jpg'

function Contact() {
  return (
    <section id='contact'>
      <div className='contact-container'>
        <h4>Contact</h4>
        <div className='contact-nav'>
          <Link to='/'>Home</Link> <span>/</span> <span>Contact</span>
        </div>
        <div className='contact-main-content'>
          <div className='contact-left'>
            <div className='contact-cell'>
              <div className='contact-icon'></div>
              <div>
                <h6>Contact person</h6>
                <p>Mr. Gowresh Waran</p>
              </div>
            </div>
            <div className='contact-cell'>
              <div className='contact-icon'></div>
              <div>
                <h6>Address</h6>
                <p>No. 268/1, Muthampatti Road, Vengalapuram, Tirupattur, Tamil Nadu, India - 635653</p>
              </div>
            </div>
            <div className='contact-cell'>
              <div className='contact-icon'></div>
              <div>
                <h6>Call Us</h6>
                <p>08069247325 Ext : 031</p>
              </div>
            </div>
            <div className='contact-cell'>
              <div className='contact-icon'></div>
              <div>
                <h6>Email</h6>
                <p>gowreshinfo@gmail.com</p>
              </div>
            </div>
            <div className='contact-cell'>
              <div className='contact-icon'></div>
              <div>
                <h6>Web Page</h6>
                <p>https://www.exportersindia.com/sri-sai-industries-tirupattur/</p>
              </div>
            </div>
            <div className='contact-cell'>
              <div className='contact-icon'></div>
              <div>
                <h6>Contact person</h6>
                <p>Mr. Gowresh Waran</p>
              </div>
            </div>
            <div className='contact-cell'>
              <div className='contact-icon'></div>
              <div>
                <h6>Contact person</h6>
                <p>Mr. Gowresh Waran</p>
              </div>
            </div>
          </div>
          <div className='contact-right'>
            <img src={i} />
            <div className='contact-layer'>
              <div className='contact-layer-color'>
           <div className='contact-right-cell-container'>
           <div className='contact-right-cell'>
              <label>Product / Service Looking for *</label>
              <input />
            </div>
            <div className='contact-right-cell'>
              <label>Your Name *</label>
              <input />
            </div>
            <div className='contact-right-cell'>
              <label>Email *</label>
              <input />
            </div>
            <div className='contact-right-cell'>
              <label>Select Country *</label>
              <input />
            </div>
            <div className='contact-right-cell'>
              <label>Select State *</label>
              <input />
            </div>
            <div className='contact-right-cell'>
              <label>City</label>
              <input />
            </div>
            <div className='contact-right-cell'>
              <label>Phone / Mobile *</label>
              <input />
            </div>
            <div className='contact-right-cell'>
              <label>Enquiry Details *</label>
              <textarea/>
            </div>
            <button>Submit</button>
           </div>
           </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact