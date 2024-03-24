import React from 'react'
import { Link } from 'react-router-dom'

function VirginCoconutOil() {
  return (
    <div className='product-container'>
      <h2>Virgin Coconut Oil</h2>
      <div className='product-nav'>
        <Link to='/'>Home</Link> <span>/</span> <Link to='/products' >Products</Link> / <span>Virgin Coconut Oil</span>
      </div>
      <div className='item-first-div'>
        <div className='item-info'>
          {/* <div className='item-image'>
            <img src='https://picsum.photos/id/234/1080'></img>
          </div> */}
          <div className='item-detail'>
            <h3>Virgin Coconut Oil</h3>
            <table>
              <tr>
                <td>Price</td>
                <td><span className='price-span'>280.00 - 290.00</span> / Kilogram</td>
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
                <td>Processing Type</td>
                <td>Virgin</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>Transparent</td>
              </tr>
              <tr>
                <td>Dosage Form</td>
                <td>Liquid</td>
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
            <table>
              <tr>
                <td>Style</td>
                <td> Natural</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>1ltr,200ml,2ltr,500ml,5ltr,TINS</td>
              </tr>
              <tr>
                <td>Best Before</td>
                <td>1 Year</td>
              </tr>
            </table>
          </div>
          <div className='right-div'>
            <table>
              <tr>
                <td>Packaging Type</td>
                <td>Plastic Bottle</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>India</td>
              </tr>
            </table>
          </div>
        </div>
        <div><p>Introducing MG Gold COCONUT OIL, your natural solution for various beauty and wellness needs:</p></div>
        <div className='item-key-features'>
          <h6>Key Features:</h6>
          <ul>
            <li>
            Hair Strengthening Power: MG Gold COCONUT OIL is your secret weapon for fortifying hair follicles and repairing split ends, leaving your locks healthier and more resilient.
            </li>
            <li>Deep Skin Hydration: Unveil the legendary skin-loving properties of coconut oil with MG Gold. Our product penetrates deep, ensuring unparalleled skin moisture, effectively combating dryness.</li>
            <li>Nourish and Hydrate with Every Drop: Experience the magic of cold-pressed coconut hair oil from MG Gold. This liquid gold offers intensive nourishment from root to tip, hydrating your hair while fortifying follicles to fend off split ends and breakage.</li>
            <li>Perfect for Baby Massages: MG Gold COCONUT OIL is gentle and soothing, making it the ideal choice for baby massages. It pampers your baby's skin, enhances sleep quality, and promotes muscle tone and strength.</li>
            <li>Purity Guaranteed: MG Gold COCONUT OIL is 100% pure and proudly carries American certification for organic authenticity. We've crafted it with the utmost care to preserve its purity and goodness, ensuring you receive the best nature has to offer.</li>
          </ul>
          <div className='btn'>Yes I'm Intrested</div>
        </div>
      </div>
    </div>
  )
}

export default VirginCoconutOil