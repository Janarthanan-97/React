import React, { useEffect, useState } from 'react'
import PrintBill from './PrintBill'
import Button from 'react-bootstrap/Button';
import orderRequest from '../service/orderRequest';

function FinalBill(params) {
    const { array, setArray, total } = params
    const [change, setChange] = useState(0)
    const [show, setShow] = useState(false);
  
    const handleShow = () => setShow(true);

    const handleBill = ()=>{
        let res = orderRequest.addOrder()
        handleShow();
        
    }

    const handleDelete = (index) => {
        array.splice(index, 1);
        setArray(array)
        setChange(state => {
            state ? state = 0 : state = 1;
            return state
        })
    }

    useEffect(() => {}, [change])

    return (
        <div className='mt-5'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Item</th>
                        <th>No of Item</th>
                        <th>Rs</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((e, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{e.item}</td>
                                <td>{e.numOfItem}</td>
                                <td>{e.price}</td>
                                <td><span className='box' onClick={() => { handleDelete(index) }}><i className="fa fa-trash" aria-hidden="true"></i></span></td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td colSpan='3' style={{fontWeight:'bolder'}}>Total</td>
                        <td style={{fontWeight:'bolder'}}>{total}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <div style={{float:"right", marginTop:20, marginRight:"10%"}}>
                    <Button variant="success" onClick={handleBill}>
                    Bill
                </Button>
                </div>
                <PrintBill show={show} setShow={setShow} array = {array} total={total} />
            </div>
        </div>
    )
}

export default FinalBill