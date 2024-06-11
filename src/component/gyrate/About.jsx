import React, { useState } from 'react'
import { motion } from 'framer-motion'

function About() {
  const [load, setLoad] = useState(0)


  return (
    <section className='about' id='about'>
        <div className='about-img'>
        <motion.img animate={{scale:load}} onLoad={()=>{setLoad(1)}} src="https://www.dropbox.com/scl/fi/74ezk5g8erfhyfde1qg9e/About_Photo.jpg?rlkey=841n4mht7xical0er712f79r5&dl=0&raw=1" alt="drive image"/>
        </div>
        <div className='about-text'>
            <h2>About <span>me</span></h2>
            <h4>Full stack developer</h4>
            <p>Welcome to my portfolio! I'm a dedicated and skilled Full Stack Developer with a passion for creating elegant and efficient web solutions. With a keen eye for detail and a deep understanding of both front-end and back-end technologies, I bring ideas to life through beautifully designed, user-friendly, and high-performing applications. </p>
            <a className='btn-box' href='https://www.dropbox.com/scl/fi/6q44skmbq0cikr095r5mi/JANARTHANAN_NEW_RESUME.pdf?rlkey=k9y02dwk0t15n5hueobh70elt&st=t0p2jg9f&dl=0&raw=1' target='_blank'>Resume</a>
        </div>
    </section>
  )
}

export default About