import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import userRequest from '../service/userRequest';
import { useNavigate } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";

function ForgetPassword() {

  const [email, setEmail] = useState()
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true)
    const res = await userRequest.forgetPassword({ email })
    setMessage(res)
    setLoading(false)
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
          <div className='box-shadow m-5 p-5 d-flex row justify-content-center align-items-center'>
            <h2 style={{ textAlign: 'center', color: 'green', fontWeight: 'bold' }}>Forget Password</h2>
            <Form style={{ height: "50vh", width: "50vw", padding: 10 }}>
              <div style={{ color: 'red', textAlign: 'center' }}>{message}</div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <p onClick={() => { navigate('/login') }} style={{ textAlign: 'right', cursor: 'pointer', color: 'green' }}>Login</p>
              <Button variant="success" type="submit" style={{ float: 'right' }} onClick={handleClick}>
                Submit
              </Button>
            </Form>
          </div>
      }
    </>
  )
}

export default ForgetPassword