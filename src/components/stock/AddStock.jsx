import React, { useState } from 'react'
import storeRequest from '../service/storeRequest'
import HashLoader from "react-spinners/HashLoader";

function AddStock() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [loading, setLoading] = useState(false)

    async function addItem(){
        let object = {name, price, stock}
        setLoading(true)
        let res = await storeRequest.addItem(object)
        setName('')
        setPrice('')
        setStock('')
        setLoading(false)
        alert(res)
    }
    
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
            <div>
                <h2 style={{ fontWeight: '500', color: 'white', textAlign: 'center', borderBottom: '3px solid green', margin: '10px', background: '#25522af7', padding: '10px' }}>Add a new stock</h2>
            </div>
        <table className='table'>
            <thead>
                <tr>
                    <td>New Item Name</td>
                    <td>Price in Rs</td>
                    <td>Total number of Item</td>
                    <td></td>
                </tr>
                <tr>
                    <td><input value={name} placeholder='Item Name...' onChange={(e)=>{setName(e.target.value)}} /></td>
                    <td><input value={price} placeholder='Rs...' onChange={(e)=>{setPrice(e.target.value)}} /></td>
                    <td><input value={stock} placeholder='Quantity of stock...' onChange={(e)=>{setStock(e.target.value)}} /></td>
                    <td><span className='box' style={{width: '70px'}} onClick={addItem}>Add</span></td>
                </tr>
            </thead>
        </table>
    </div>
    }
    </>
  )
}

export default AddStock