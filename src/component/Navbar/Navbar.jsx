import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [productDropDisplay, setProductDropDisplay] = useState('none')
  const [hideExceptProduct, setHideExceptProduct] = useState('flex')
  const [showProductItems, setShowProductItem] = useState('none')
  const [isChanged, setIsChaged] = useState(0)
  const handleProductClick= ()=>{
    setIsChaged(pre=>{
      if(pre==0){
        setProductDropDisplay('flex')
        setHideExceptProduct('none')
        setShowProductItem('flex')
        return 1;
      }
      else{
        setProductDropDisplay('none')
        setHideExceptProduct('flex')
        setShowProductItem('none')
        return 0;
      }
    })
  }
  return (
    <div className='nav-container'>
      <h2>Sri Sai Industries</h2>
      <div className='nav-link-container' style={{'--hide-except-product':`${hideExceptProduct}`}}>

        <NavLink className='nav-item' to='/' ><span className='icon'><i class="fa-solid fa-house"></i></span><div>Home</div></NavLink>

        <NavLink className='nav-item' to='/about' ><span className='icon'><i class="fa-solid fa-circle-info"></i></span ><div>About</div></NavLink>

        {/* /////large screen product */}
        <NavLink className='nav-item' onClick={handleProductClick} ><span style={{color:"white"}} className='icon'><i class="fa-solid fa-cart-shopping"></i></span><div style={{color:"white"}}>Products</div>
        <div className='product-drop-down' style={{'--drop':`${productDropDisplay}`}} >
          <NavLink  to='/products/raw-peanuts' ><span className='icon' ><i class="fa-solid fa-cart-shopping"></i></span><div>Raw peanuts</div></NavLink>
          <NavLink  to='/products/roasted-peanuts' ><span className='icon'><i class="fa-solid fa-cart-shopping"></i></span><div>Roasted Peanuts</div></NavLink>
          <NavLink  to='/products/virgin-groundnut-oil' ><span className='icon'><i class="fa-solid fa-cart-shopping"></i></span><div>Groundnut Oil</div></NavLink>
          <NavLink  to='/products/virgin-coconut-oil' ><span className='icon'><i class="fa-solid fa-cart-shopping"></i></span><div>Coconut oil</div></NavLink>
          </div>
        </NavLink>

        {/* ////mini-screen-product */}
        <div className='product-nav-items-container' style={{display:`${showProductItems}`}} >
          <NavLink  to='/products/raw-peanuts' ><span className='icon' ><i class="fa-solid fa-cart-shopping"></i></span><div>Raw peanuts</div></NavLink>
          <NavLink  to='/products/roasted-peanuts' ><span className='icon'><i class="fa-solid fa-cart-shopping"></i></span><div>Roasted Peanuts</div></NavLink>
          <NavLink  to='/products/virgin-groundnut-oil' ><span className='icon'><i class="fa-solid fa-cart-shopping"></i></span><div>Groundnut Oil</div></NavLink>
          <NavLink  to='/products/virgin-coconut-oil' ><span className='icon'><i class="fa-solid fa-cart-shopping"></i></span><div>Coconut oil</div></NavLink>
          <a ><span className='icon' onClick={handleProductClick}><i class="fa-solid fa-arrow-right-from-bracket"></i></span><div>Back</div></a>
        </div>
        <NavLink className='nav-item' to='/contact' ><span className='icon'><i class="fa-solid fa-address-card"></i></span><div>Contact</div></NavLink>
      </div>
    </div>
  )
}

export default Navbar