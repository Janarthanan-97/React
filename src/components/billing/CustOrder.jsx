import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import orderRequest from '../service/orderRequest';
import CustOrderList from './CustOrderList';

function CustOrder() {

    const [customerNumber, setCustomerNumber] = useState('')
    const [array, setArray] = useState([])
    const [itemArray, setItemArray] = useState([])

    const handleSearch = async () => {
        let res = await orderRequest.getOrder({ customerNumber })
        setArray(res.orders)
    }

    useEffect(() => { }, [])

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5px' }}>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Phone Number:</td>
                            <td><input placeholder='Enter Phone' onChange={e => { setCustomerNumber(e.target.value) }} /></td>
                            <td><Button variant="success" onClick={handleSearch} >
                                Search
                            </Button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                {
                    array.map((e) => {
                        return (
                            <table>
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
                        )
                    })
                }
            </div>
        </div>
        </div>
    )
}

export default CustOrder