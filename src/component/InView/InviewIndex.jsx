import React, { useEffect, useRef } from 'react'
import { useInView, motion, animate, useAnimation } from "framer-motion";
import './InviewIndex'

function Section({ children }) {
    const variant = {
        hidden:{
            x:100
        },
        show:{
            x:0
        },
    }
    const ref = useRef(null)
    const isInView = useInView(ref)
    const viewControl = useAnimation()
    useEffect(()=>{
         if(isInView) viewControl.start({x:0, opacity:1})
        console.log(isInView)
    },[isInView])
    return (
        <section ref={ref}
            style={{height:'100vh', overflow:'scroll', color:'white', fontSize:'36px'}}
        >
            <motion.span
                initial={{x:100, opacity:0}}
                animate={viewControl}
                // variants={variant}
                transition={{delay:0.5, duration:1}}
            >
                {children}
            </motion.span>
        </section>
    )
}

function InviewIndex() {


    return (
        <div
        style={{
            height:'100vh',
            overflow:'scroll',
            width:'100vw'
        }}>
            <Section>Animate</Section>
            <Section>when</Section>
            <Section>in</Section>
            <Section>view!</Section>
        </div>
    )
}

export default InviewIndex