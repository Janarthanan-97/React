import React from 'react'
import './Card.css';

function Cards(props) {
    let [title, secondTitle, ...cardArray] = Object.values(props);

  return (
    <div className='cardElement container'>
        <div className="d-flex justify-content-evenly text-muted fs-7 fw-lighter">{title}</div>
        <div className='d-flex justify-content-evenly fs-5 fw-semibold pb-3'>{secondTitle}</div>
        <ul className='pt-3'>
          {cardArray.map(ele =>{
          console.log(ele)
          if(ele[1])
          {
            return <li key={ele[0]} className='fw-medium'><span>✓</span>{ele[0]}</li>
          }
          else{
            return <li key={ele[0]} className='text-muted fw-lighter'><span>✗</span>{ele[0]}</li>
          }
        
        })}
        </ul>
        <a href="#" class="btn btn-primary d-flex justify-content-evenly">BUTTON</a>
    </div>
  )
}

export default Cards