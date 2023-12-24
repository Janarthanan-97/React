import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/NavBar/Navbar'
import Rooms from './component/rooms/Rooms';
import LoginIndex from './component/login/Index';

function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/rooms' element={<Rooms />} />
      <Route path='/' element={<LoginIndex />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App