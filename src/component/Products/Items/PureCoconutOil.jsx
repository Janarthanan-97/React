import React from 'react'
import { Link } from 'react-router-dom'

function PureCoconutOil() {
  return (
    <div className='product-container'>
      <h2>Pure Coconut Oil</h2>
      <div className='product-nav'>
        <Link to='/'>Home</Link> <span>/</span> <Link to='/products' >Products</Link> / <span>Raw Peanuts</span>
      </div>
      <div className='item-first-div'>
        <div className='item-info'>
          {/* <div className='item-image'>
            <img src='https://picsum.photos/id/234/1080'></img>
          </div> */}
          <div className='item-detail'>
            <h3>Pure Coconut Oil</h3>
            <table>
              <tr>
                <td>Price</td>
                <td><span className='price-span'>250.00 - 300.00</span> / Kilogram</td>
              </tr>
              <tr>
                <td>MOQ</td>
                <td> 1 Ton</td>
              </tr>
              <tr>
                <td>Business Type</td>
                <td>Manufacturer, Supplier</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Extraction Method</td>
                <td>Cold Pressed</td>
              </tr>
              <tr>
                <td>Application</td>
                <td>Cooking</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>Anywhere in India</td>
              </tr>
            </table>
            <div className='btn'>SEND ENQUIRY</div>
          </div>
        </div>
      </div>

      <div className='item-added-detail'>
        <div className='top-div'>
          <div className='left-div'>
            <h6>Product Details</h6>
            <table>
              <tr>
                <td>Shelf Life</td>
                <td> 12 Months</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>India</td>
              </tr>
            </table>
          </div>
          <div className='right-div'>
            <table>
              <tr>
                <td>Packaging Type</td>
                <td>Plastic Bottle</td>
              </tr>
            </table>
          </div>
        </div>
        <div className='item-key-features'>
          <p>Elevate your diet and culinary adventures with MG Gold Raw coconut oil – the nutritious and delicious choice for individuals who demand the best. Join us in savoring the simple pleasure of pure, coconut oil</p>
          <p>Nourish your body, inspire your cooking, and enjoy the unmatched quality of MG Gold Raw coconut oil.</p>
          <div className='btn'>Yes I'm Intrested</div>
        </div>
      </div>
    </div>
  )
}

export default PureCoconutOil