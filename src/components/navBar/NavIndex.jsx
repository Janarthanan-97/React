import React from 'react'
import UserInfo from './UserInfo'
import NavOption from './NavOption'

function NavIndex() {
  return (
    <>
    <div className='nav-bar'>
      <UserInfo />
      <NavOption />
    </div>
    </>
  )
}

export default NavIndex