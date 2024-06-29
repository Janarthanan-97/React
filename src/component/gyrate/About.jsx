import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

function About() {
  const [load, setLoad] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})
  const control = useAnimation()

  useEffect(()=>{
    if(isInView){
      control.start('visible')
    }

  },[isInView])

  return (
    <section className='about' id='about'>
        <div className='about-img'>
        <motion.img 
        initial={{opacity:0, scale:0}}
        animate={isInView && load} 
        transition={{delay:0.75}}
        onLoad={()=>{setLoad({opacity:1, scale:1})}} src="https://www.dropbox.com/scl/fi/74ezk5g8erfhyfde1qg9e/About_Photo.jpg?rlkey=841n4mht7xical0er712f79r5&dl=0&raw=1" alt="drive image"/>
        </div>
        <div className='about-text'
        ref={ref}
        > 
            <motion.h2
              variants={{hidden:{opacity:0, x:-100}, visible:{opacity:1, x:0}}}
              initial='hidden'
              animate={control}
              transition={{delay:0.5, duration:0.5}}
            >
              About <span>me</span>
            </motion.h2>
            <motion.h4
              variants={{hidden:{opacity:0, x:100}, visible:{opacity:1, x:0}}}
              initial='hidden'
              animate={control}
              transition={{delay:0.5, duration:0.5}}
            >Full stack developer</motion.h4>
            <motion.p
              variants={{hidden:{opacity:0, x:100}, visible:{opacity:1, x:0}}}
              initial='hidden'
              animate={control}
              transition={{delay:0.5, duration:0.5}}
            >
              <div
              style={{position:'relative'}}
              >Welcome to my portfolio! I'm a dedicated and skilled Full Stack Developer with a passion for creating elegant and efficient web solutions. With a keen eye for detail and a deep understanding of both front-end and back-end technologies, I bring ideas to life through beautifully designed, user-friendly, and high-performing applications. 

              <motion.div
                variants={{
                  hidden:{width:'100%', height:'100%'},
                  visible:{width:'0%', height:'100%'}
                }}
                initial="hidden"
                animate={control}
                transition={{duration:0.5, ease:'easeIn', delay:0.5}}
                style={{
                  position:'absolute',
                  top:0,
                  bottom:0,
                  background:'var(--primary)',
                  zIndex:20
                }}
              >

              </motion.div>
              </div>
            
              
            </motion.p>
            <motion.a 
            variants={{
              hidden:{opacity:0, y:100},
              visible:{opacity:1, y:0}
            }}
            initial="hidden"
            animate={control}
            transition={{duration:0.5, ease:'easeIn', delay:0.5}}
            className='btn-box' href='https://www.dropbox.com/scl/fi/6q44skmbq0cikr095r5mi/JANARTHANAN_NEW_RESUME.pdf?rlkey=k9y02dwk0t15n5hueobh70elt&st=t0p2jg9f&dl=0&raw=1' target='_blank'>Resume</motion.a>
        </div>
    </section>
  )
}

export default About