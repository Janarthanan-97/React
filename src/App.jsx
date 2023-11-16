import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreatUser from './component/CreatUser';
import Modify from './component/Modify';
import Delete from './component/Delete';
import Home from './component/Home';
import Users from './component/Users';


function App() {

 

  return (
    <div>
      <BrowserRouter>
      <Home />
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/register' element={<CreatUser />} />
          <Route path='/modify' element={<Modify />} />
          <Route path='/delete' element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App