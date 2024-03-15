import React from 'react'
import './Products.css'
import ProductCard from './ProductCard'

function Products() {
  return (
    <div className='product-container'>
      <h4>OUR PRODUCTS </h4>
      <div className='card-container'>
          <ProductCard />
      </div>
    </div>
  )
}

export default Products