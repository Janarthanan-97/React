import React from 'react'
import './Home.css'

import Carousel from './Carousel'
import FacilityCard from './FacilityCard'

function Home() {
  return (
    <section id='home'>
      <div className='home-container'>
      <Carousel />
      <div className='facility-card-container'>
        <div className='card-container-1'><FacilityCard /></div>
        <div className='card-container-2'><FacilityCard /></div>
        <div className='card-container-3'><FacilityCard /></div>
      </div>
    </div>
    </section>
  )
}

export default Home