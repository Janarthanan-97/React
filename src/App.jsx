import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import NavIndex from './component/NavBar/NavIndex'
import MenuIndex from './component/Menu/MenuIndex'
import Index from './Index'
import InviewIndex from './component/InView/InviewIndex'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/nav' element={<NavIndex />} />
        <Route path='/menu' element={<MenuIndex />} />
        <Route path='/inview' element={<InviewIndex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App