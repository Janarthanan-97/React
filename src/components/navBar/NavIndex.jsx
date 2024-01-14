import React from 'react'
import UserInfo from './UserInfo'
import NavOption from './NavOption'

function NavIndex() {
  return (
    <div className='nav-bar'>
      {/* <div className='menu box'><i class="fa fa-bars" aria-hidden="true"></i></div> */}
      <UserInfo />
      <NavOption />
    </div>
  )
}

export default NavIndex