import React from 'react'
import founder from './founder.svg'

function GlimpseCard({image, title, info}) {
    console.log(image)
  return (
    <div className='glimpse-card-holder'>
        <span>
            <image src={founder} alt='img' />
        </span>
        <h6>{title}</h6>
        <p>{info}</p>
    </div>
  )
}

export default GlimpseCard