import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ItemCard from './ItemCard';
import storeRequest from '../service/storeRequest';
import HashLoader from "react-spinners/HashLoader";

function ListAllStock() {
  const [item, setItem] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [change, setChange] = useState(0);
  const [loading, setLoading] = useState(false)

  async function fetchItem() {
    setLoading(true)
    let res = await storeRequest.getItem();
    setLoading(false)
    if (searchItem != '') {
      let array = [];
      res.map(e => {
        if (e.name.includes(searchItem.toUpperCase())) {
          array.push(e)
        }
      })
      setItem(array)
    }
    else {
      setItem(res)
    }
  }

  useEffect(() => { fetchItem() }, [change])

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: "10px", borderBottom: '3px solid green' }}>
        <h2>Items in Inventory</h2>
        <div style={{ height: '60%', width: '300px', display: 'flex', margin: 10, gap: 5 }}>
          <Form.Control type="text" placeholder="Search item by Name..." onChange={(e) => {
            setSearchItem(e.target.value);
            fetchItem();
            setChange(pre => {
              pre ? pre = 0 : pre = 1;
              return pre
            })
          }} />
        </div>
      </div>
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
            <div style={{ margin: '5px', display: 'flex', flexDirection:'row', flexWrap: 'wrap', gap:'20px', justifyContent:'center' }}>
              {item.map(ele => {
                return <ItemCard name={ele.name} price={ele.price} number={ele.stock} id={ele._id} setChange={setChange} />
              })}
            </div>
          </div>
      }
    </>
  )
}

export default ListAllStock