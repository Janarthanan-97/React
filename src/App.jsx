import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import NavIndex from './component/NavBar/NavIndex'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/nav' element={<NavIndex />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App