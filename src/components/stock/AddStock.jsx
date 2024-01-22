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
    }
    </>
  )
}

export default AddStock