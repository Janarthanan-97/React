import React from 'react'
import './App.css'
import Login from './components/login/Login'
import Index from './components/Index'


function App() {
  const isLoggedIn = localStorage.getItem('token')
  console.log(isLoggedIn)


  return (
    <>
    {isLoggedIn ? <Index /> : <Login />}
    </>
  )
}

export default App