import React from 'react'

function FacilityCard({name}) {
  
  return (
    <>
      <div className='image-card-div'>
        <img src='https://www.dropbox.com/scl/fi/ity51b7i74vo9v07u0h13/roasted-peanut.jpg?rlkey=31opxd0ejkdj28gkonsdhz4tb&dl=0&raw=1' />
        <div className='image-card-layer'></div>
        <div className='image-card-btn'><span>View More</span></div>  
        <h6>{name}</h6>
      </div>
    </>
  )
}

export default FacilityCard