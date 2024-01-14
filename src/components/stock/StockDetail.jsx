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
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <StockCard name='No of Items' number={count} />
      <StockCard name='Total cost' number = {pre} />
    </div>
    </div>
  )
}

export default StockDetail