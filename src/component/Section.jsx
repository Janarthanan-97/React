import React from 'react'
import Card from './Card'

function Section() {
  return (
    <>
     <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            
            <Card name = "Fancy Product" mutedPrice="" price = "$40.00 - $80.00" option = "View options"/>
                
            </div>
        </div>
     </section>
    </>
  )
}

export default Section