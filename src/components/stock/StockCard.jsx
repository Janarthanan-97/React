import React, { useEffect } from 'react'

function StockCard(props) {
  const {name, number} = props

  return (
    <div className='mt-2' style={{background: "linear-gradient(#6B8E23, #0A343E)", height:200, width:300, display:'flex', justifyContent:'center', alignItems:'center', color:'white', flexFlow:'column', cursor:'pointer'}}>
        <p style={{fontSize:'4rem'}}>{number}</p>
    <p style={{fontSize:'1.5rem', marginTop:'-10px'}}>{name}</p>
    </div>
  )
}

export default StockCard