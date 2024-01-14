import React from 'react'
import { Link } from 'react-router-dom'

function NavOption() {
  return (
      <div style={{background:'#27622150'}}>
        <div className='nav-list'>
            <div><Link to='/' className='nav-link active'><span className='ms-5'>Stock</span></Link></div>
            <div><Link to='/bill' className='nav-link active'><span className='ms-5'>Bill</span></Link></div>
            <div><Link to='/all-item' className='nav-link active'><span className='ms-5'>All Items</span></Link></div>
            <div><Link to='/add-stock' className='nav-link active'><span className='ms-5'>Add Item</span></Link></div>
            <div><Link to='/orders' className='nav-link active'><span className='ms-5'>Orders</span></Link></div>
        </div>
    </div>
  )
}

export default NavOption