import React from 'react'
import './About.css'
import AboutCard from './AboutCard'

function About() {
  return (
    <section id='about'>
      <div className='about-container'>
      <h4>ABOUT US</h4>
      <div className='about-cards'>
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div>
    </div>
    </section>
  )
}

export default About