import React, { useEffect } from 'react'
import NavIndex from './navBar/NavIndex'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'

function Index() {
  let navigate = useNavigate()

  let handleLogout = ()=>{
    localStorage.clear();
    navigate('/login')
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/')
    }
    else {
      navigate('/login')
    }
  }, [])

  return (
    <>
    <div className='top-strip'>
          <h2>Inventory Billing</h2>
          <div className='user-div'>
          <div onClick={handleLogout}><i class="fa-solid fa-power-off"></i></div>
          </div>
      </div>
    <div className='grid-container'>
      <div className='nav-grid'><NavIndex /></div>
      <div className='page-grid'><Outlet /></div>
    </div>
    </>
  )
}

export default Index