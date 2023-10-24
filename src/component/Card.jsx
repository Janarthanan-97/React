import React, { useContext, useState } from 'react'
import RatingStar from './RatingStar'
import { CartCounter } from './CartValue'



////////////////////////////////////////////////////////////////////////////////////
function Sale({sale}){
    if(sale=='true'){
        return <div className="badge bg-dark text-white position-absolute">Sale</div>
    }    
}
///////////////////////////////////////////////////////////////////////////////////////////
function Rating({rating}){
    if(rating=='yes')
    {
        return <>
        <div className="d-flex justify-content-center small text-warning mb-2">
                                       <RatingStar />
                                       <RatingStar />
                                       <RatingStar />
                                       <RatingStar />
                                       <RatingStar />                             
         </div>
        </>
    }
}


////////////////////////////////////////////////////////////////////////////////
function Card(props) {


    const [buttonOption, setButtonOption] = useState(props.option);
    ////////////////////
    let cartCount = useContext(CartCounter)
    let [count, setCount] = cartCount;

    let optionClickHandler = (option)=>{
        if(option == "Add to cart")
        {
            setCount(count+1);
            setButtonOption("Remove from cart")
        }
        if(option == "Remove from cart")
        {
            setCount(count-1);
            setButtonOption("Add to cart");
        }
    }

    ///////////////////////////////////////
    

    
  return (
    <>
                   <div className="col mb-5">
                        <div className="card h-100">
                        
                        {/* <!-- Sale ------------------------------badge--> */}
                        <Sale sale={props.sale}/>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{props.name}</h5>
                                    
                                    {/* <!-- Product --------------------reviews--> */}
                                    <Rating rating={props.rating}/>

                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">{props.mutedPrice}</span>
                                    {props.price}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={()=>optionClickHandler(buttonOption)}>{buttonOption}</a></div>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default Card