import React, { useState } from 'react'
import './About.css'
import { Link } from 'react-router-dom'

function About() {
  let [productShow, setProductShow] = useState('none')
  let [productPlus, setProductPlus] = useState('block')
  let [productMinus, setProductMinus] = useState('none')

  let [ContactShow, setContactShow] = useState('none')
  let [contactPlus, setContactPlus] = useState('block')
  let [contactMinus, setContactMinus] = useState('none')

  let handleProductPlus = () => {
    setProductShow('block')
    setProductPlus('none')
    setProductMinus('block')
  }
  let handleProductMinus = () => {
    setProductShow('none')
    setProductPlus('block')
    setProductMinus('none')
  }
  let handleContactPlus = () => {
    setContactShow('block')
    setContactPlus('none')
    setContactMinus('block')
  }
  let handleContactMinus = () => {
    setContactShow('none')
    setContactPlus('block')
    setContactMinus('none')
  }

  return (
    <section id='about'>
      <div className='about-container'>
        <div className='about-left'>
          <h4>ABOUT US</h4>
          <div className='about-nav'>
            <Link to='/'>Home</Link> <span>/</span> <Link to='/about' >About Us</Link>
          </div>
          <div className='about-content'>
            <p>Established in 2021 in Tirupattur, Tamil Nadu, Sri Sai Industries is a well-known company that provides high-grade cooking oil and other agricultural products. In order to improve the oil's taste and purity, our method doubly filters the oil.</p>
            <p>Since we deal with food-grade products, we uphold the highest standards of quality in all we do. We utilise premium oil seeds that we either directly purchase from farmers growing these crops or purchase from reliable dealers. Our refining operations are strategically positioned and equipped with state-of-the-art mechanical technologies to process mustard seeds. We've also built a state-of-the-art testing centre so that our whole array may be examined on several quality factors.</p>
            <h5>Our Vision</h5>
            <p>The company's goal is to offer top-notch goods that offer the best possible value for the money and customer happiness. Our goal is to expand our global empire by providing top-notch items at competitive pricing.</p>
            <h5>Our Team</h5>
            <p>We have a group of committed workers that enable us to efficiently handle all of our commercial operations. Our personnel do their utmost to provide our clients with items of the highest calibre, with an extensive understanding of our field. Thanks to their unwavering and committed efforts, we have managed to carve out a unique place for ourselves in the very competitive commercial world of today.</p>
            <h5>Our company's objectives are :</h5>
            <ul>
              <li>We want to satisfy or surpass our customers' needs by providing the highest calibre goods at reasonable costs.</li>
              <li>Provide a secure work environment so that our staff members may advance their knowledge and abilities.</li>
              <li>Increasing the quality of our products, services, and corporate and personal integrity will help to strengthen our commercial connection.</li>
            </ul>
          </div>

          <div>
            <table id='about-table'>
              <tr>
                <td className='table-head'>Name of Founder</td>
                <td>Mr. Gowresh Waran</td>
              </tr>
              <tr>
                <td className='table-head'>Year of Establishment</td>
                <td>2021</td>
              </tr>
              <tr>
                <td className='table-head'>Nature of Business</td>
                <td>Manufacturer & Supplier</td>
              </tr>
              <tr>
                <td className='table-head'>Number of Employees</td>
                <td>50 People</td>
              </tr>
              <tr>
                <td className='table-head'>Annual Turnover</td>
                <td>Rs. 50 Lakh</td>
              </tr>
              <tr>
                <td className='table-head'>Market Covered</td>
                <td>India</td>
              </tr>
              <tr>
                <td className='table-head'>GST No</td>
                <td>33DIWPM4777H1ZI</td>
              </tr>
            </table>
          </div>
        </div>
        <div className='about-right'>
          <div className='about-product'>
            <h4>Products
              <span>
                <span onClick={handleProductPlus} id='about-product-plus' style={{ '--product-plus': `${productPlus}` }}>+</span>
                <span onClick={handleProductMinus} id='about-product-minus' style={{ '--product-minus': `${productMinus}` }} >-</span>
              </span>
            </h4>
            <div className='about-product-list' style={{ '--product-show': `${productShow}` }} >
              <p>Raw Peanut</p>
              <p>Roasted peanuts</p>
              <p>Virgin Groundnut oil</p>
              <p>Virgin Coconut Oil</p>
              <p>Pure Coconut Oil</p>
            </div>
          </div>
          <div className='about-contact'>
            <h4>Contact Us
              <span>
                <span onClick={handleContactPlus} id='about-contact-plus' style={{'--contact-plus':`${contactPlus}`}} >+</span>
                <span onClick={handleContactMinus} id='about-contact-minus' style={{'--contact-minus':`${contactMinus}`}}  >-</span>
              </span>
            </h4>
            <div className='about-contact-list' style={{ '--contact-show': `${ContactShow}` }}>
              <h5>Sri Sai Industries</h5>
              <p>No. 268/1, Muthampatti Road, Vengalapuram, Tirupattur, Tamil Nadu - 635653, India</p>
              <p>Mobile : +91-9629289436</p>
              <p>Call Us : 08069247325 Ext : 031</p>
              <p>E-mail : gowreshinfo@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About