import React, { useEffect, useState } from 'react'
import FinalBill from './FinalBill'
import storeRequest from '../service/storeRequest';
import orderRequest from '../service/orderRequest';

function BillingTable() {
    const [array, setArray] = useState([])
    const [item, setItem] = useState('');
    const [numOfItem, setNumOfItem] = useState('')
    const [price, setPrice] = useState(0)
    const [perPrice, setPerPrice] = useState(0)
    const [change, setChange] = useState(0);
    const [customerName, setCustomerName] = useState('')
    const [customerNumber, setCustomerNumber] = useState('')
    const [itemID, setItemID] = useState('')
    const [total, setTotal] = useState(0)

    const handlePlus = () => {
        setArray((state = []) => {
            state.push({ item, numOfItem, price, itemID })
            return state
        })
        setTotal((state) => {
            state = state + price;
            return state
        })
        setChange(state => {
            state ? state = 0 : state = 1;
            return state
        })
        setItem('');
        setNumOfItem('');
        setPrice('');
        setPerPrice('0')
    }

    const handleItemChange = (e) => {
        setItem(e.target.value)
        setChange(state => {
            state ? state = 0 : state = 1;
            return state
        })
    }

    async function fetchItem() {
        let res = await storeRequest.getItem();
        res.map(e => {
            if (item.toUpperCase() == e.name) {
                setPerPrice(e.price)
                setItemID(e._id)
            }
        })
    }

    async function fetchOrder(){
        let custObj = {customerNumber}
        let res = await orderRequest.getOrder(custObj)
        if(res){
            setCustomerName(res.customerName)
        }
        if(customerNumber.length<10)
        {
            setCustomerName('')
        }
    }

    useEffect(() => { fetchItem(); fetchOrder() }, [price, change, customerNumber])


    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th colSpan='2'>
                            <label>Customer Name: </label>
                            <input placeholder='Name' value={customerName} onChange={(e)=>{setCustomerName(e.target.value)}} />
                        </th>
                        <th colSpan='2'>
                            <label>Mobile:</label>
                            <input placeholder='Phone' onChange={(e)=>{setCustomerNumber(e.target.value)}} />
                        </th>
                    </tr>
                    <tr>
                        <th>Item</th>
                        <th>No of Item</th>
                        <th>Price</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input value={item} onChange={handleItemChange} />
                        </td>
                        <td><input value={numOfItem} onChange={(e) => {
                            setNumOfItem(e.target.value);
                            setPrice(e.target.value * perPrice)
                        }} /><span>*{perPrice}</span></td>
                        <td>{price}</td>
                        <td><span className='box' onClick={handlePlus}>+</span></td>
                    </tr>
                </tbody>
            </table>
            <FinalBill setArray={setArray} array={array} total={total} customerName={customerName} customerNumber={customerNumber} setCustomerNumber={setCustomerNumber} setTotal={setTotal} />
        </div>
    )
}

export default BillingTable