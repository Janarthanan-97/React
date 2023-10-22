import React from 'react'

function Card(props) {
    console.log(props)
  return (
    <>
                   <div className="col mb-5">
                        <div className="card h-100">
                        
                        {/* <!-- Sale ------------------------------badge--> */}
                            
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{props.name}</h5>
                                    
                                    {/* <!-- Product --------------------reviews--> */}
                                    

                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">{props.mutedPrice}</span>
                                    {props.price}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">{props.option}</a></div>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default Card