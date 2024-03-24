import React from 'react'
import { Link } from 'react-router-dom'

function VirginGroundnutOil() {
  return (
    <div className='product-container'>
      <h2>Virgin Groundnut Oil</h2>
      <div className='product-nav'>
        <Link to='/'>Home</Link> <span>/</span> <Link to='/products' >Products</Link> / <span>Virgin Groundnut Oil</span>
      </div>
      <div className='item-first-div'>
        <div className='item-info'>
          {/* <div className='item-image'>
            <img src='https://picsum.photos/id/234/1080'></img>
          </div> */}
          <div className='item-detail'>
            <h3>Virgin Groundnut Oil </h3>
            <table>
              <tr>
                <td>Price</td>
                <td><span className='price-span'>225.00 - 245.00</span> / Kilogram</td>
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
                <td>Yellow</td>
              </tr>
              <tr>
                <td>Form</td>
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
                <td>Application</td>
                <td>Cooking</td>
              </tr>
              <tr>
                <td>Purity</td>
                <td>100%</td>
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
                <td>Certification</td>
                <td>FSSAI</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td> 1ltr, 200ml</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>India</td>
              </tr>
            </table>
          </div>
        </div>
        <div><p>Experience the Richness of MG Gold Groundnut Oil - Your Pathway to Quality and Flavor!</p>
        <p>Introducing MG Gold Groundnut Oil, your gateway to pure and unadulterated culinary delight. We take immense pride in offering you a premium cooking oil that stands as a testament to the unparalleled quality and goodness we bring to your kitchen.</p>
        </div>
        <div className='item-key-features'>
          <h6>Key Features:</h6>
          <ul>
            <li>
            Pure Perfection:MG Gold Groundnut Oil is crafted through a meticulous filtration process, ensuring its purity and eliminating any impurities. It's the epitome of unadulterated flavor and nourishment.
            </li>
            <li>Nutrient Powerhouse:Packed with essential nutrients and heart-healthy monounsaturated fats, our groundnut oil enhances your overall well-being. It's rich in vitamin E, antioxidants, and provides a natural source of energy.</li>
            <li>Exceptional Flavor: Delight in the unmistakable nutty aroma and rich, aromatic taste that our groundnut oil brings to your culinary creations. It adds a layer of authenticity and depth to your dishes.</li>
            <li>High Smoke Point:MG Gold Groundnut Oil boasts a high smoke point, making it perfect for all your high-heat cooking methods. It's your ideal partner for deep frying, stir-frying, and sautéing.</li>
            <li>Versatile and Nutritious: Whether you're preparing traditional Indian dishes, Asian delicacies, or even your favorite desserts, our groundnut oil adds a delicious twist and nutritional boost to every recipe.</li>
            <li>Quality Assurance:Our commitment to quality is unwavering. MG Gold Groundnut Oil is produced under stringent quality control measures, meeting international standards and regulations. It's the result of an unwavering dedication to delivering excellence.</li>
            <li>Export-Quality Packaging: We package our groundnut oil with precision and care to ensure it reaches you in pristine condition. Choose from various packaging options, including bottles and containers tailored to your export needs.</li>
          </ul>
          <p>MG Gold Groundnut Oil is more than just a cooking essential; it's a promise of flavor, nutrition, and quality. Elevate your culinary adventures with the premium experience that MG Gold offers.</p>
          <h6>Why Choose MG Gold Groundnut Oil?</h6>
          <ul>
            <li>Trusted by culinary experts and households alike.</li>
            <li>Pure, unrefined, and free from additives.</li>
            <li>Exceptional flavor and nutrition.</li>
            <li>Suitable for a variety of cuisines and cooking styles.</li>
            <li>Export-ready packaging options available.</li>
          </ul>
          <p>For inquiries and orders, contact MG Gold today and embark on a journey of culinary excellence with MG Gold Groundnut Oil. Your kitchen deserves the best, and MG Gold delivers nothing less.</p>
          <div className='btn'>Yes I'm Intrested</div>
        </div>
      </div>
    </div>
  )
}

export default VirginGroundnutOil