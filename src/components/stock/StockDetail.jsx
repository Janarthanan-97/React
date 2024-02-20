import React, { useEffect, useState } from 'react'
import StockCard from './StockCard'
import storeRequest from '../service/storeRequest'
import HashLoader from "react-spinners/HashLoader";
import { useNavigate } from 'react-router-dom';
import ItemCard from './ItemCard';

function StockDetail() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false)
  const [change, setChange] = useState(0)
  let navigate = useNavigate();
  let deficitArray = []
  let [deficitStateArray, setDeficitStateArray] = useState([])
  let [sortedSaleArray, setSortedSaleArray] = useState([])

  let pre = 0

  //////////////date
  let dd = new Date().getDate()
  let mm = new Date().getMonth() + 1
  let yy = new Date().getFullYear()
  let date = `${dd}/${mm}/${yy}`

  async function fetchItem() {
    setLoading(true)
    let res = await storeRequest.getItem();
    ////////////////////////////Top sale
    let saleArray = [];
    res.map(e => {
      e.sale.map(d => {
        if (d.date == date)
          saleArray.push({ date: d.date, name: e.name, quantity: d.quantity })
      })
      let sortedArray = saleArray.sort((a, b) => b.quantity - a.quantity)
      setSortedSaleArray(sortedArray)
      //////////////////////out of stock
      if (e.stock <= 20) {
        deficitArray.push(e)
        setDeficitStateArray(deficitArray)
      }
    })
    setLoading(false)
    setItem(res)
  }
  let count = item.length
  item.map(e => {
    pre = (e.price * e.stock) + pre;
  })

  useEffect(() => {
    fetchItem()
  }, [change])

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
          <div style={{ margin: '10px' }}>
            <div style={{ borderTop: '3px solid green', borderBottom: '3px solid green' }}>
              <h2>Inventory summary</h2>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', margin: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div onClick={() => { navigate("all-item") }}><StockCard name='N.o. of Items in Inventory' number={count} /></div>
                <div><StockCard name='Gross total cost in Rupees' number={pre} /></div>
                <div><StockCard name='Out of Stock' number={deficitStateArray.length} color='linear-gradient(#ff3403, #ff8E04)' /></div>
              </div>
            </div>

            <div style={{ borderBottom: '3px solid green' }}>
              <h2 style={{ marginTop: "10px" }}>Items out of Stock: {deficitStateArray.length}</h2>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', margin: '10px', flexWrap: 'wrap', justifyContent:'center' }}>
                {
                  deficitStateArray.map(e => {
                    return <ItemCard name={e.name} price={e.price} number={e.stock} id={e._id} setChange={setChange} color='linear-gradient(#ff3403, #ff8E04)' />
                  })
                }
              </div>
            </div>

            <div style={{ borderBottom: '3px solid green' }}>
              <h2 style={{ marginTop: "10px" }}>Top sale of the day</h2>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', margin: '10px', flexWrap: 'wrap', width: '100%', justifyContent:'center' }}>
                {
                  sortedSaleArray.map((e,i) => {
                    if(i<3){
                      return <StockCard name={`${e.quantity} Items`} number={e.name} />
                    }
                    
                  })
                }
              </div>
            </div>

          </div>
      }
    </>
  )
}

export default StockDetail