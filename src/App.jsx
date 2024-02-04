import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Skills from './component/Skills'
import Portfolio from './component/Portfolio'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Image from './component/Image'

function App() {
  return (
    <>
   <Navbar />
   <Home />
   <About />
   <Skills />
   <Portfolio />
   <Contact />
   <Footer />
    </>
  )
}

export default App