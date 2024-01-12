import React, { useState } from 'react'
import storeRequest from '../service/storeRequest'

function AddStock() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')

    async function addItem(){
        let object = {name, price, stock}
        let res = storeRequest.addItem(object)
        setName('')
        setPrice('')
        setStock('')
        alert(res)

    }
    
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>No of items</td>
                    <td></td>
                </tr>
                <tr>
                    <td><input value={name} onChange={(e)=>{setName(e.target.value)}} /></td>
                    <td><input value={price} onChange={(e)=>{setPrice(e.target.value)}} /></td>
                    <td><input value={stock} onChange={(e)=>{setStock(e.target.value)}} /></td>
                    <td><span className='box' onClick={addItem}>+</span></td>
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default AddStock