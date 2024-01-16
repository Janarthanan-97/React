import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import userRequest from '../service/userRequest'

function Verify() {
    const {token} = useParams()
    const navigate = useNavigate()
    const [message, setMessage] = useState("")
    // console.log(token)

    const veriyRequest =async ()=>{
        const res = await userRequest.verify(token)
        setMessage(res)
        
    }

    useEffect(()=>{veriyRequest()}, [message])

  return (
    <div className='box-shadow m-5 p-5 d-flex row justify-content-center align-items-center'>Account activated, Please Login</div>
  )
}

export default Verify