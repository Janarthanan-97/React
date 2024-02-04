import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Image from './Image'

function Home() {

  return (
    <section className='home' id='home'>
      <div className='home-content'>
        <h3>Hello, It's me</h3>
        <h1>Janarthanan M</h1>
        <h3>I'm a <span className='typewriter'>{
          <Typewriter
            words={['Frontend developer', 'Backend developer']}
            loop={0} />}</span></h3>
        <p>I'm a Full stack developer, who has ability to bring imagination to screen</p>
        <div className='home-sci'>
          <a href="https://www.instagram.com/janarthanan97/" target='_blank' style={{ "--i": 6 }} ><i className='bx bxl-instagram'></i></a>
          <a href="https://github.com/Janarthanan-97" target='_blank' style={{ "--i": 7 }} ><i class='bx bxl-github'></i></a>
          <a href="mailto:janamadhav13@gmail.com" style={{ "--i": 8 }} ><i className='bx bxl-gmail'></i></a>
        </div>
        <a href='#about' className='btn-box' >More about me</a>
      </div>
      <Image />

    </section>
  )
}

export default Home