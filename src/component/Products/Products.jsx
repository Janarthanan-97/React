import React from 'react'
import './Products.css'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <section id='product'>
      <div className='product-container' >
        <h4>PRODUCTS</h4>
        <div className='product-nav'>
          <Link to='/'>Home</Link> <span>/</span> <Link to='/products' >Products</Link>
        </div>
        {/* <div className='product-image-container'>
          <Link to='/products/roasted-peanuts'><ProductCard url='https://www.dropbox.com/scl/fi/ity51b7i74vo9v07u0h13/roasted-peanut.jpg?rlkey=31opxd0ejkdj28gkonsdhz4tb&dl=0&raw=1' /></Link>
          <Link to='/products/raw-peanuts'><ProductCard /></Link>
          <Link to='/products/virgin-groundnut-oil'><ProductCard url='https://www.dropbox.com/scl/fi/q83tm2ty2ef3eyd255n0a/virgin-groundnut-oil.jpg?rlkey=34kbhv1esl4ly9pj4h7biovkn&dl=0&raw=1' /></Link>
          <Link to='/products/virgin-coconut-oil'><ProductCard url='https://www.dropbox.com/scl/fi/mpewe3dfyz4ly5nvg6xvq/virgin-coconut-oil.jpg?rlkey=236p74f8hbzefr4hj4or9h1d6&dl=0&raw=1' /></Link>
          <Link to='/products/pure-coconut-oil'><ProductCard /></Link>
        </div> */}
      </div>
    </section>
  )
}

export default Products