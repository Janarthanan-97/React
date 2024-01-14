import React, { useEffect } from 'react'
import NavIndex from './navBar/NavIndex'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'

function Index() {
  let navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/')
    }
    else {
      navigate('/login')
    }
  }, [])

  return (
    <div className='grid-container'>
      <div className='nav-grid'><NavIndex /></div>
      <div className='page-grid'><Outlet /></div>
    </div>
  )
}

export default Index