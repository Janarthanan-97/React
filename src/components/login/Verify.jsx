import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import userRequest from '../service/userRequest'
import HashLoader from "react-spinners/HashLoader";

function Verify() {
    const {token} = useParams()
    const navigate = useNavigate()
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    // console.log(token)

    const veriyRequest =async ()=>{
      setLoading(true)
        const res = await userRequest.verify(token)
        setMessage(res)
        setLoading(false)
    }

    useEffect(()=>{veriyRequest()}, [message])

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
      <div className='box-shadow m-5 p-5 d-flex row justify-content-center align-items-center'>Account activated, Please Login</div>
    }
    </>
  )
}

export default Verify