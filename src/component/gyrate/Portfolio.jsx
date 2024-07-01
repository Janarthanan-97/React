import { motion, useAnimation, useInView  } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'

const PortfolioReveal = ({ source, link, title, content }) => {
    const [load, setLoad] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref)
    const control = useAnimation()

    useEffect(()=>{
        if(isInView && load){
            control.start('visible')
        }

    },[isInView])

    return (
        <motion.div
        ref={ref}
        className='row'
            variants={{
                hidden:{scale:0},
                visible:{scale:1}
            }}
            initial='hidden'
            animate={control}
            transition={{duration:.2, delay:0.25}}
        >
            <img src={source} onLoad={()=>{setLoad(true)}} />
            <a className='layer' href={link} target='_blank' >
                <h5>{title}</h5>
                <p>{content}</p>
            </a>
        </motion.div>
    )
}

function Portfolio() {
    return (
        <section>
            <div className='portfolio' id='portfolio'>
                <div className='main-text'>
                    <h2>My <span>Portfolio</span></h2>

                    <div className='portfolio-content'>
                        <PortfolioReveal 
                        source={'https://www.dropbox.com/scl/fi/fdlqq9s4hw2c3d601637g/Capstone.png?rlkey=wvt2gjwp7askzlq0mp7s42ija&dl=0&raw=1'} 
                        link={'https://jazzy-fenglisu-c53c8a.netlify.app/'} 
                        title={'Billing APP'} 
                        content={'Billing app, where one can add, delete, modify, bill items and can retrive customer billing'}  />
                        
                        <PortfolioReveal 
                            source={'https://www.dropbox.com/scl/fi/xwxxlbaiy4d5iku6upmrt/Screenshot-2024-06-09-205629.png?rlkey=2rya169ya3qbn842hjl30r9tm&st=jc00a3dq&dl=0&raw=1'}
                            link={'https://stupendous-squirrel-291bb7.netlify.app/'}
                            title={'Chat APP'}
                            content={'Chat App is created using socket.io where one can communicate on real time.'}
                        />

                           <PortfolioReveal 
                            source={'https://www.dropbox.com/scl/fi/w5h8i4wi93ypacqy847qj/Screenshot-2024-06-09-210603.png?rlkey=p1t6iy0n2e7xeozdwgo6ywfjw&st=it1i8yqn&dl=0&raw=1'}
                            link={'https://profound-bienenstitch-a76cdc.netlify.app/'}
                            title={'Business portfolio'}
                            content={'This portfolio is completely built using self made designs without using of any designer framework such as bootstrap, tailwind, etc...'}
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio