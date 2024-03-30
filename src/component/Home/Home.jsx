import React from 'react'
import './Home.css'
import greeting from './vector.svg'
import founder from './founder.svg'
import Carousel from './Carousel'
import ImageCard from './ImageCard'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import GlimpseCard from './GlimpseCard'

function Home() {
  return (
    <section id='home'>
      <div className='home-container'>
        <Carousel />
        <div className='home-product-container'>
          <h2>Our <span>Products</span></h2>
          <div className='image-card-container'>
            <Link to='/products/raw-peanuts' className='card-container-1'><ImageCard name='Raw Peanuts' /></Link>
            <Link to='/products/roasted-peanuts' className='card-container-2'><ImageCard name='Roasted Peanuts' /></Link>
            <Link to='/products/virgin-groundnut-oil' className='card-container-3'><ImageCard name='Virgin Groundnut Oil' /></Link>
            <Link to='/products/virgin-coconut-oil' className='card-container-3'><ImageCard name='Virgin Coconut Oil' /></Link>
            <Link to='/products/pure-coconut-oil' className='card-container-3'><ImageCard name='Pure Coconut Oil' /></Link>
          </div>
        </div>
        <div className='home-about-container'>
          <div className='main-container'>
            <div className='text-container'>
              <h3>Welcome to our Website</h3>
              <p>Established in 2021 in Tirupattur, Tamil Nadu, Sri Sai Industries is a well-known company that provides high-grade cooking oil and other agricultural products. In order to improve the oil's taste and purity, our method doubly filters the oil. Since we deal with food-grade products, we uphold the highest standards of quality in all we do. We utilise premium oil seeds that we either directly...</p>
              <Link to='/about' className='home-about-read-more'><span><i class="fa-solid fa-angles-right"></i></span> Read more <span><i class="fa-solid fa-angles-left"></i></span></Link>
            </div>
            <div className='image-container'>
              <div className='image-frame'>
                <img src={greeting} alt='Greeting' />
              </div>
            </div>
          </div>
        </div>
        <div className='glimpse-container'>
          <h2>Glimpse of <span>Our Company</span></h2>
          <div className='glimpse-card-container'>
            <GlimpseCard image={founder} title='Founder' info='Mr. Gowresh Waran' />
            <GlimpseCard image={founder} title='Year of Establishment' info='2021' />
            <GlimpseCard image={founder} title='Nature of Business' info='Manufacturer & Supplier' />
            <GlimpseCard image={founder} title='Number of Employees' info='50 People' />
            <GlimpseCard image={founder} title='Annual Turnover' info='Rs. 50 Lakh' />
          </div>
        </div>
        <div className='goal-container'>

          <div className='goal-cardholder' >
            <div className='goal-topic'>Our <span>Establishment</span></div>
            <p>
              Established in 2021 in Tirupattur, Tamil Nadu, Sri Sai Industries is a well-known company that provides high-grade cooking oil and other agricultural products. In order to improve the oil's taste and purity, our method doubly filters the oil.
            </p>
          </div>

          <div className='goal-cardholder' >
            <div className='goal-topic'>Our <span>Vision</span></div>
            <p>
              The company's goal is to offer top-notch goods that offer the best possible value for the money and customer happiness. Our goal is to expand our global empire by providing top-notch items at competitive pricing.
            </p>
          </div>

          <div className='goal-cardholder' >
            <div className='goal-topic'>Our <span>Team</span></div>
            <p>
              We have a group of committed workers that enable us to efficiently handle all of our commercial operations. Our personnel do their utmost to provide our clients with items of the highest calibre, with an extensive understanding of our field.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home