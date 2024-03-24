import React from 'react'
import { Link } from 'react-router-dom'

function RoastedPeanuts() {
  return (
    <div className='product-container'>
      <h2>Roasted Peanuts</h2>
      <div className='product-nav'>
        <Link to='/'>Home</Link> <span>/</span> <Link to='/products' >Products</Link> / <span>Raw Peanuts</span>
      </div>
      <div className='item-first-div'>
        <div className='item-info'>
          {/* <div className='item-image'>
            <img src='https://picsum.photos/id/234/1080'></img>
          </div> */}
          <div className='item-detail'>
            <h3>Roasted Peanuts</h3>
            <table>
              <tr>
                <td>Price</td>
                <td><span className='price-span'>215.00 - 235.00</span> / Kilogram</td>
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
                <td>Color</td>
                <td>Brown</td>
              </tr>
              <tr>
                <td>Application</td>
                <td>Human Consumption</td>
              </tr>
              <tr>
                <td>Taste</td>
                <td>Salted</td>
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
                <td>Type</td>
                <td>Roasted</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>High Protein</td>
              </tr>
            </table>
          </div>
          <div className='right-div'>
            <table>
              <tr>
                <td>Shelf Life</td>
                <td>3 Months</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>India</td>
              </tr>
            </table>
          </div>
        </div>
        <div><p>Discover the perfect balance of flavor and nutrition with MG Gold Roasted Peanuts, where the wholesome goodness of peanuts meets the irresistible crunch of a satisfying snack. We bring you a delightful taste that's perfect for snacking, sharing, and elevating your culinary creations.</p></div>
        <div className='item-key-features'>
          <h6>Key Features:</h6>
          <ul>
            <li>
            Premium Quality Peanuts: MG Gold selects the finest quality peanuts to ensure that each bite is a burst of natural flavor and wholesome nutrition.
            </li>
            <li>Artisanal Roasting: Our peanuts are carefully roasted to perfection, enhancing their earthy, nutty flavor and delivering a satisfying crunch in every bite.</li>
            <li>Unadulterated Goodness: We take pride in offering you roasted peanuts that are free from artificial additives, preserving their purity and authenticity.</li>
            <li>Nutrient-Rich Snacking: Packed with essential nutrients, these roasted peanuts provide you with protein, healthy fats, vitamins, and minerals, making them a healthy snacking choice.</li>
            <li>Versatile Usage: These roasted peanuts are a versatile ingredient in the kitchen. Use them to garnish salads, add a crunch to stir-fries, or incorporate them into your favorite recipes.</li>
            <li>Satisfying Snack: Enjoy the goodness of roasted peanuts as a convenient and nutritious snack, whether you're on the go, at work, or simply relaxing at home.</li>
            <li>Health Benefits: Roasted peanuts are known for their potential to support heart health, weight management, and providing energy for an active lifestyle.</li>
            <li>Freshness Guaranteed: MG Gold ensures that our roasted peanuts are sealed in airtight packaging to preserve their freshness and flavor.</li>
          </ul>
          <p>Elevate your snacking experience and culinary endeavors with MG Gold Roasted Peanuts, where simplicity meets exceptional taste and nutrition. With every bite, you'll savor the timeless delight of roasted peanuts, whether enjoyed on their own or as a versatile addition to your dishes.</p>
          <p>Nourish your body, satisfy your cravings, and embrace the premium quality of MG Gold Roasted Peanuts. Elevate your snacking game and indulge in the delicious and nutritious experience that only the finest roasted peanuts can offer.</p>
          <div className='btn'>Yes I'm Intrested</div>
        </div>
      </div>
    </div>
  )
}

export default RoastedPeanuts