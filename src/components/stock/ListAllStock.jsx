import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ItemCard from './ItemCard';
import storeRequest from '../service/storeRequest';

function ListAllStock() {
  const [item, setItem] = useState([]);
  const [change, setChange] = useState(0);

  async function fetchItem(){
    let res = await storeRequest.getItem();
    setItem(res)
  }

  useEffect(()=>{  fetchItem()}, [change])

  return (
    <div>
        <div style={{background:'#276221', display:'flex', flexDirection:'row-reverse'}}>
            <div style={{height:'60%',width:'300px', display:'flex', margin:10, gap:5}}>
            <Form.Control type="text" placeholder="Item" />
            <Button variant="warning">
                    Search
                </Button>
            </div>
        </div>
        <div style={{margin:'5px', gap:'5px', display:'flex', flexWrap:'wrap', alignItems:'center', width:'60vw'}}>
          {item.map(ele=>{
            console.log(ele.name)
            return <ItemCard name={ele.name} price={ele.price} number = {ele.stock} id={ele._id} setChange={setChange} />
          })}
        
        </div>
    </div>
  )
}

export default ListAllStock