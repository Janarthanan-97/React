import React from 'react'
import Index from './component/login/Index'
import ForgetPassword from './component/login/ForgetPassword'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ResetPassword from './component/login/ResetPassword'

function App() {
  // console.log(import.meta.env.VITE_URL)
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Index />} />
      <Route path='/forget-password' element={<ForgetPassword />}/>
      <Route path='/reset-password/' element={<ResetPassword />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App