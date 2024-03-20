import React from 'react'
import './App.css'
import './component/Products/Items/ProductItem.css'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import About from './component/About/About'
import Products from './component/Products/Products'
import Contact from './component/Contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RawPeanuts from './component/Products/Items/RawPeanuts'
import RoastedPeanuts from './component/Products/Items/RoastedPeanuts'
import VirginGroundnutOil from './component/Products/Items/VirginGroundnutOil'
import VirginCoconutOil from './component/Products/Items/VirginCoconutOil'
import PureCoconutOil from './component/Products/Items/PureCoconutOil'


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/raw-peanuts' element={<RawPeanuts />} />
          <Route path='/products/roasted-peanuts' element={<RoastedPeanuts />} />
          <Route path='/products/virgin-groundnut-oil' element={<VirginGroundnutOil />} />
          <Route path='/products/virgin-coconut-oil' element={<VirginCoconutOil />} />
          <Route path='/products/pure-coconut-oil' element={<PureCoconutOil />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App