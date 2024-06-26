import { motion, AnimatePresence, stagger, animate, useAnimate } from 'framer-motion';
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';




function Index() {
    const items = [['NavBar', 'nav'], ['Menu', 'menu'], ['ViewAnimation', 'inview'], ['Menu', 'menu']];
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            "li", { opacity: 1, scale: 1, filter: "blur(0px)", x:0 },
            {
              duration: 0.2,
              delay: stagger(0.1, { startDelay: 0.15 })
            }
          );
    })


    return (
        <ul ref={scope}>
            <AnimatePresence>
                {
                    items.map((item, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -100 }}
                            // animate={{ opacity: 1, x: 0 }}
                            // exit={{ opacity: 0, x: 100 }}
                            // style={{ marginBottom: 20, color: 'white', fontWeight: 'bold', fontSize: '28' }}
                        >
                            <NavLink style={{ textDecoration: 'none', color: "white" }} to={`/${item[1]}`} >{item[0]}</NavLink>
                        </motion.li>
                    ))
                }
            </AnimatePresence>
        </ul>
    )
}

export default Index