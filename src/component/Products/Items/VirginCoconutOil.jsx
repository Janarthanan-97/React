import React from 'react'
import { Link } from 'react-router-dom'

function VirginCoconutOil() {
  return (
    <div className='product-container'>
      <h2>Raw Peanuts</h2>
      <div className='product-nav'>
        <Link to='/'>Home</Link> <span>/</span> <Link to='/products' >Products</Link> / <span>Raw Peanuts</span>
      </div>
      <div className='item-first-div'>
        <div className='item-info'>
          {/* <div className='item-image'>
            <img src='https://picsum.photos/id/234/1080'></img>
          </div> */}
          <div className='item-detail'>
            <h3>Raw Peanuts</h3>
            <table>
              <tr>
                <td>Price</td>
                <td><span className='price-span'>130.00 - 160.00</span> / Kilogram</td>
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
                <td>Cultivation Type</td>
                <td>Organic</td>
              </tr>
              <tr>
                <td>Processing Type</td>
                <td>Raw</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>Brownish, Light Red</td>
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
                <td>Form</td>
                <td>Kernels</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>25kg, 50kg</td>
              </tr>
              <tr>
                <td>Shelf Life</td>
                <td>1 Year</td>
              </tr>
            </table>
          </div>
          <div className='right-div'>
            <table>
              <tr>
                <td>Packaging Type</td>
                <td>Jute Bag, Plastic Packet</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>Natural</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>India</td>
              </tr>
            </table>
          </div>
        </div>
        <div><p>At MG Gold, we take immense pride in offering you the finest selection of Raw Groundnut Seeds, unprocessed and brimming with natural goodness. These versatile seeds, also known as peanuts, are more than just a delicious snack – they're a powerhouse of nutrition for your body and a versatile ingredient for your culinary creations.</p></div>
        <div className='item-key-features'>
          <h6>Key Features:</h6>
          <ul>
            <li>
            Premium Quality: MG Gold Raw Groundnut Seeds are meticulously sourced from trusted farms to ensure only the highest quality. Each seed is handpicked for its size and purity, delivering a superior product.
            </li>
            <li>Nutrient-Rich: Packed with essential nutrients, our raw groundnut seeds are an excellent source of protein, healthy fats, and a wide array of vitamins and minerals. They provide you with an energy boost and support overall well-being.</li>
            <li>Versatile Ingredient:Whether you're a home cook or a professional chef, you'll love the versatility of our raw groundnut seeds. Use them to add a delightful crunch to your salads, make your own homemade peanut butter, or incorporate them into your favorite recipes.</li>
            <li>Natural Flavor: Enjoy the wholesome and earthy flavor of raw groundnuts. They're a perfect canvas for culinary creativity, allowing you to season and roast them to your taste.</li>
            <li>Snacking Delight: These raw groundnuts make for a delightful and nutritious snack. Carry them on your adventures or enjoy them while relaxing at home.</li>
            <li>Health Benefits: Raw groundnut seeds are known for their heart-healthy monounsaturated fats, antioxidants, and the potential to reduce the risk of heart disease. They also support weight management and provide essential nutrients for strong bones and muscles.</li>
            <li>Freshness Assured: MG Gold takes every measure to ensure the freshness and quality of our groundnut seeds. We package them carefully to maintain their natural goodness.</li>
            <li>Diverse Applications: From snacking to cooking and baking, the possibilities with MG Gold Raw Groundnut Seeds are endless. Unleash your culinary creativity and reap the rewards of their health benefits.</li>
          </ul>
          <p>Elevate your diet and culinary adventures with MG Gold Raw Groundnut Seeds – the nutritious and delicious choice for individuals who demand the best. Join us in savoring the simple pleasure of pure, unprocessed groundnut seeds in their raw, untouched form.</p>
          <p>Nourish your body, inspire your cooking, and enjoy the unmatched quality of MG Gold Raw Groundnut Seeds. Discover the taste of nature in every bite.</p>
          <div className='btn'>Yes I'm Intrested</div>
        </div>
      </div>
    </div>
  )
}

export default VirginCoconutOil