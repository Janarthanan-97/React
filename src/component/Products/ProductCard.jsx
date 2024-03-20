import React from 'react'

function ProductCard({url}) {
  console.log(url)
  return (
    <div className='product-card-container'>
        <div className='image'>
          <img src={url} />
        </div>
    </div>
  )
}

export default ProductCard