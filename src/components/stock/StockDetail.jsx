import React, { useEffect, useState } from 'react'
import StockCard from './StockCard'
import storeRequest from '../service/storeRequest'
import HashLoader from "react-spinners/HashLoader";

function StockDetail() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false)
  // const [totalPrice, setTotalPrice] = useState(0)

  let pre = 0

  async function fetchItem() {
    setLoading(true)
    let res = await storeRequest.getItem()
    setLoading(false)
    setItem(res)
  }
  let count = item.length
  item.map(e => {
    pre = (e.price * e.stock) + pre;
  })

  useEffect(() => {
    fetchItem()
  }, [])

  return (
    <>
      {
        loading
          ?
          <div className='m-5 p-5 d-flex row justify-content-center align-items-center'>
            <HashLoader
              color="#36d7b7"
              cssOverride={{}}
            />
          </div>
          :
          <div>
            <div style={{ background: '#276221', display: 'flex', height: '50px', marginBottom: '10px' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <StockCard name='No of Items' number={count} />
              <StockCard name='Total cost' number={pre} />
            </div>
          </div>
      }
    </>
  )
}

export default StockDetail