import React, { useState } from 'react'
import Navigation from './component/Navigation'
import Header from './component/Header'
import Section from './component/Section'
import  {CartCounter}  from './component/CartValue'

// Task – * The rating according to value given * Disable add to cart button when added to card * Remove item from cart & enable add to cart https://startbootstrap.com/previews/shop-homepage

function App() { 
  const [count, setCount] = useState(0);


  return (
    <>

    <CartCounter.Provider value={[count, setCount]}>
      
          <Navigation />
          <Header />
          <Section />
      
    </CartCounter.Provider>
    </>
  )
}

export default App

