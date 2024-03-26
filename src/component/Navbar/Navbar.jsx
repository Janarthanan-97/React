import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [productDropDisplay, setProductDropDisplay] = useState('none')
  const [hideExceptProduct, setHideExceptProduct] = useState('flex')
  const [showProductItems, setShowProductItem] = useState('none')
  const [isChanged, setIsChaged] = useState(0)
  const [navChange, setNavChange] = useState(1)
  const navArray = ['#1','#2','#3','#4','#5']
  const handleProductClick = () => {
    setIsChaged(pre => {
      if (pre == 0) {
        setProductDropDisplay('flex')
        setHideExceptProduct('none')
        setShowProductItem('flex')
        return 1;
      }
      else {
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
      <div className='nav-link-container' style={{ '--hide-except-product': `${hideExceptProduct}` }}>

        <NavLink className='nav-item' to='/' ><span className='icon'><i className="fa-solid fa-house"></i></span><div>Home</div></NavLink>

        <NavLink className='nav-item' to='/about' ><span className='icon'><i className="fa-solid fa-circle-info"></i></span ><div>About</div></NavLink>

        {/* /////large screen product */}
        <NavLink className='nav-item' onClick={handleProductClick} ><span style={{ color: "white" }} className='icon'><i className="fa-solid fa-cart-shopping"></i></span><div style={{ color: "white" }}>Products</div>
          <div className='product-drop-down' style={{ '--drop': `${productDropDisplay}` }} >
            <NavLink to='/products/raw-peanuts' ><span className='icon' ><i className="fa-solid fa-cart-shopping"></i></span><div>Raw peanuts</div></NavLink>
            <NavLink to='/products/roasted-peanuts' ><span className='icon'><i className="fa-solid fa-cart-shopping"></i></span><div>Roasted Peanuts</div></NavLink>
            <NavLink to='/products/virgin-groundnut-oil' ><span className='icon'><i className="fa-solid fa-cart-shopping"></i></span><div>Groundnut Oil</div></NavLink>
            <NavLink to='/products/virgin-coconut-oil' ><span className='icon'><i className="fa-solid fa-cart-shopping"></i></span><div>Coconut oil</div></NavLink>
          </div>
        </NavLink>

        {/* ////mini-screen-product */}
        {/* <span className='icon' ><i className="fa-solid fa-cart-shopping"></i></span> */}
        <div className='product-nav-items-container' style={{ display: `${showProductItems}` }} >
          <div className='nav-arrow nav-arrow-left product-nav-other'>
            <a href={navArray[navChange]} onClick={()=>{setNavChange(pre=>{
              // if(pre==4){
              //   return 2
              // }
              console.log(pre)
              if(pre>0 && pre<5){
                return pre-1
              }
              else{
                return 0
              }
            })}} ><i className="fa-solid fa-arrow-left"></i></a>
          </div>
          <div className='product-nav-items' >
            <NavLink to='/products/raw-peanuts' id='1' >Raw peanuts</NavLink>
            <NavLink to='/products/roasted-peanuts' id='2' >Roasted Peanuts</NavLink>
            <NavLink to='/products/virgin-groundnut-oil' id='3' >Virgin Groundnut Oil</NavLink>
            <NavLink to='/products/virgin-coconut-oil' id='4' >Virgin Coconut oil</NavLink>
            <NavLink to='/products/pure-coconut-oil' id='5' >Pure Coconut oil</NavLink>
          </div>
          <div className='nav-arrow nav-arrow-right product-nav-other' >
            <a href={navArray[navChange]} onClick={()=>{setNavChange(pre=>{
              // if(pre==0){
              //   return 3
              // }
              console.log(pre)
              if(pre<4 && pre>=0)
              {
                return pre+1
              }
              else{
                return 4
              }
            })}}><i className="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className='nav-back product-nav-other' ><a><span className='icon' onClick={handleProductClick}><i className="fa-solid fa-bars"></i></span><div>Navigate</div></a></div>
        </div>
        <NavLink className='nav-item' to='/contact' ><span className='icon'><i className="fa-solid fa-address-card"></i></span><div>Contact</div></NavLink>
      </div>
    </div>
  )
}

export default Navbar