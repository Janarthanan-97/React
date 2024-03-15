import React from 'react'

function Carousel() {
  return (
    <section className='carousel-container'>
      <div className='slider-wrapper'>
        <div className='slider'>
          <img id='slide-1' src='https://picsum.photos/id/234/1080' />
          <img id='slide-2' src='https://picsum.photos/id/235/1080' />
          <img id='slide-3' src='https://picsum.photos/id/236/1080' />
          <img id='slide-4' src='https://picsum.photos/id/237/1080' />
          <img id='slide-5' src='https://picsum.photos/id/238/1080' />
        </div>
        <div className='slider-nav'>
          <a href='#slide-1'></a>
          <a href='#slide-2'></a>
          <a href='#slide-3'></a>
          <a href='#slide-4'></a>
          <a href='#slide-5'></a>
        </div>
      </div>
    </section>
  )
}

export default Carousel