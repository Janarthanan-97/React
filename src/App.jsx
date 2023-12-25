import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/NavBar/Navbar'
import Rooms from './component/rooms/Rooms';
import LoginIndex from './component/login/Index';
import MyRooms from './component/rooms/MyRooms';
import AddRoom from './component/rooms/AddRoom'


function App() {
 
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/rooms' element={<Rooms />} />
      <Route path='/' element={<LoginIndex />} />
      <Route path='/myRooms' element={<MyRooms />} />
      <Route path='/addRoom' element = {<AddRoom />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App