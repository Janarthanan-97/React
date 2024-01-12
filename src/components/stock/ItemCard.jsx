import React, { useState } from 'react'
import EditCard from './EditCard'


function ItemCard(props) {
    
    const {name, price, number, id, setChange} = props
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

  return (
    <div className='mt-2 p-3' style={{background: "linear-gradient(#6B8E23, #0A343E)", height:200, width:300, display:'flex', justifyContent:'center', alignItems:'center', color:'white', flexFlow:'column', cursor:'pointer'}}>
        <p className='edit-box' onClick={handleShow}><i className="fas fa-edit"></i></p>
        <p style={{fontSize:'4rem'}}>{number}</p>
    <p style={{fontSize:'1.5rem', marginTop:'-10px'}}>{name}</p>
    <p style={{fontSize:'1.25rem'}}>Price: {price}</p>
    <EditCard show={show} setShow={setShow} object={props} setChange={setChange} />
    </div>
  )
}

export default ItemCard