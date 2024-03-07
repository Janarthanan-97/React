import React from 'react'

function About() {
  return (
    <section className='about' id='about'>
        <div className='about-img'>
        <img src="https://www.dropbox.com/scl/fi/74ezk5g8erfhyfde1qg9e/About_Photo.jpg?rlkey=841n4mht7xical0er712f79r5&dl=0&raw=1" alt="drive image"/>
        </div>
        <div className='about-text'>
            <h2>About <span>me</span></h2>
            <h4>Full stack developer</h4>
            <p>Welcome to my portfolio! I'm a dedicated and skilled Full Stack Developer with a passion for creating elegant and efficient web solutions. With a keen eye for detail and a deep understanding of both front-end and back-end technologies, I bring ideas to life through beautifully designed, user-friendly, and high-performing applications. </p>
            <a className='btn-box' href='https://www.dropbox.com/scl/fi/czp17gkkxycdmca4rvpnf/JANARTHANAN.pdf?rlkey=isghu6gruckzphk2n5noyvbnc&dl=0&raw=1' target='_blank'>Resume</a>
        </div>
    </section>
  )
}

export default About