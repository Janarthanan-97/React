import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import orderRequest from '../service/orderRequest';
import CustOrderList from './CustOrderList';

function CustOrder() {

    const [customerNumber, setCustomerNumber] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [array, setArray] = useState([])
    // const [itemArray, setItemArray] = useState([])

    const handleSearch = async () => {
        let res = await orderRequest.getOrder({ customerNumber })
        // console.log(res.orders)
        setCustomerName(res.customerName)
        let editOrders = res.orders
        editOrders.map(e => {
            let dd = new Date(e.date).getDate()
            let mm = new Date(e.date).getMonth()
            let ms = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
            let yy = new Date(e.date).getFullYear()
            let date = `${ms[mm]} ${dd} ${yy}`
            e.date = date
        })
        // res.orders = editOrders
        setArray(res.orders)

    }

    useEffect(() => { }, [])

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5px' }}>
                <div style={{ fontWeight: '500', color: 'white', textAlign: 'center', borderBottom: '3px solid green', margin: '10px', background: '#25522af7', padding: '10px', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <h4 style={{ marginRight: '15px' }}>Customer number:</h4>
                    <input placeholder='Enter phone number' onChange={e => { setCustomerNumber(e.target.value) }} /><Button variant="success" onClick={handleSearch} style={{ marginLeft: '10px' }} >
                        Search
                    </Button>
                </div>

                <div>
                    {
                        array.map((e) => {
                            return (
                                <div>
                                    <div style={{border:'green solid 2px', display:'flex', width:'600px', fontSize:'22px', justifyContent:'space-between', padding:'10px', fontWeight:'600'}}>
                                        <div>Name: <span style={{color:'green'}}>{customerName}</span></div>
                                        <div>Mobile: <span style={{color:'green'}}>{customerNumber}</span></div>
                                    </div>
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th colSpan='2'>
                                                    {
                                                        e.date
                                                    }
                                                </th>
                                            </tr>
                                        </thead>
                                        <CustOrderList order={e.items} handleSearch={handleSearch} />
                                    </table>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CustOrder