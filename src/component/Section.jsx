import React from 'react'
import Card from './Card'

function Section() {
  return (
    <>
     <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            
            <Card sale = "false" name = "Fancy Product" rating="no" mutedPrice="" price = "$40.00 - $80.00" option = "View options"/>

            <Card sale = "true" name = "Special Item" rating="yes" mutedPrice="$20.00" price = "$18.00" option = "Add to cart"/>

            <Card sale = "true" name = "Sale Item" rating="no" mutedPrice="" price = "$40.00" option = "Add to cart"/>

            <Card sale = "false" name = "Popular Item" rating="yes" mutedPrice="$20.00" price = "$18.00" option = "Add to cart"/>
                {/* ------------------------------------------------------- */}

              <Card sale = "true" name = "Sale Item" rating="no" mutedPrice="$50.00" price = "$25.00" option = "Add to cart"/>

              <Card sale = "false" name = "Fancy Product" rating="no" mutedPrice="" price = "$120.00 - $280.00" option = "View option"/>

              <Card sale = "true" name = "Special Item" rating="yes" mutedPrice="$20.00" price = "$18.00" option = "Add to cart"/>

              <Card sale = "false" name = "Popular Item" rating="yes" mutedPrice="" price = "$40.00" option = "Add to cart"/>
            
            </div>
        </div>
     </section>
    </>
  )
}

export default Section