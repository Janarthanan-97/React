import React, { useEffect, useState } from 'react'
import StockCard from './StockCard'
import storeRequest from '../service/storeRequest'

function StockDetail() {
  const [item, setItem] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0)
  let pre = 0

  async function fetchItem() {
    let res = await storeRequest.getItem()
    setItem(res)
  }
  let count = item.length
  item.map(e=>{
   pre = (e.price*e.stock)+pre;
  })

  useEffect(() => {
    fetchItem()
  }, [])

  return (
    <div>
      <div style={{background:'#276221', display:'flex', height:'50px', marginBottom:'10px'}}></div>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'10px'}}>
      <StockCard name='No of Items' number={count} />
      <StockCard name='Total cost' number = {pre} />
    </div>
    </div>
  )
}

export default StockDetail