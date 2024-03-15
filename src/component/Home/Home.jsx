import React from 'react'
import './Home.css'

import Carousel from './Carousel'
import FacilityCard from './FacilityCard'

function Home() {
  return (
    <div className='home-container'>
      <Carousel />
      <div className='facility-card-container'>
        <FacilityCard />
        <FacilityCard />
        <FacilityCard />
      </div>
    </div>
  )
}

export default Home