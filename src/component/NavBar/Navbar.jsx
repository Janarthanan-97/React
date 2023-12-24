import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import UserLogin, { UserLogout } from './UserLogin'
import RoomLink from './RoomLink'

function Navbar() {

  const isLoggedIn = useSelector(state => state.user)
  console.log(isLoggedIn.isLoggedIn)
  const navigate = useNavigate()
  

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Hall Booking</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isLoggedIn.isLoggedIn ? navigate('/rooms') : navigate('/')}
              {isLoggedIn.isLoggedIn ? <UserLogout /> : <UserLogin />}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar