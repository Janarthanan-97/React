import { motion, stagger, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'


const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

const SkillReveal = ({ logo, content, progress }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const control = useAnimation()
   
    useEffect(()=>{
        if(isInView){
            control.start('visible')
        }
    }, [isInView])

    return (
        <motion.div className='item'
        ref={ref}
        variants={{hidden:{opacity:0, y:100}, visible:{opacity:1, y:0}}}
        initial='hidden'
        animate={control}
        transition={{duration:0.2}}
        >
            <i className={logo}></i>
            <h2>{content}</h2>
            <div className='progress-line'>
                <span style={{ width: `${progress}%` }}></span>
                <p>{`${progress}%`}</p>
            </div>
        </motion.div>
    )
}

function Skills() {
    return (
        <section>
            <div className='service' id='service'>
                <div className='container'>
                    <h1 className='sub-title'>My <span>Skills</span></h1>

                    <motion.div className='service-list'
                    variants={{
                        visible:{transition:{staggerChildren:0.2}}
                    }}
                    animate='visible'
                    >

                        <SkillReveal logo='bx bxl-html5' content = 'HTML' progress="80" />

                       
                        <SkillReveal logo='bx bxl-css3' content = 'CSS' progress="75" />

                        <SkillReveal logo='bx bxl-javascript' content = 'JAVASCRIPT' progress="85" />
                        

                        <SkillReveal logo='bx bxl-react' content = 'REACT' progress="80" />
                        

                        <SkillReveal logo='bx bxl-mongodb' content = 'MongoDB' progress="75" />

                        <SkillReveal logo='bx bxl-nodejs' content = 'NodeJS' progress="80" />

                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Skills