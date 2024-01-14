import React, { useEffect, useState } from 'react'
import storeRequest from '../service/storeRequest';

function CustOrderList(props) {
    const { order, handleSearch } = props
    const [array, setArray] = useState([]);
    
//    useEffect(()=>{
//     setChange(state=>{
//         state ? state=0 : state=1
//         return state
//     })
//    }, [])

    const fetchItem = async ()=>{
        let res = await storeRequest.getItem();
        for(let i=0; i<order.length; i++){
            for(let j=0; j<res.length; j++){
                if(order[i].id == res[j]._id)
                {
                    console.log({name:res[j].name, quantity:order[i].quantity})
                    setArray((state=[])=>{
                        state.push({name:res[j].name, quantity:order[i].quantity})
                        return state;
                    })
                }
            }
        }    
        handleSearch()
    }

   useEffect(()=>{ fetchItem()},[])

    return (
        <tbody>
            {array.map(e => {
                return (
                    <tr>
                        <td>{e.name}</td>
                        <td>{e.quantity}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default CustOrderList