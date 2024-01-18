import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import userRequest from '../service/userRequest';
import { useNavigate } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";

function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState()
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false)

  const handleLogin = async (event) => {
    event.preventDefault()
    const user = { email, password };
    setLoading(true)
    const res = await userRequest.login(user);
    setMessage(res)
    setLoading(false)
    if (res.token) {
      localStorage.setItem('token', res.token)
      localStorage.setItem('email', res.email)
      navigate('/')
    }
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
            <h2 style={{ textAlign: 'center', color: 'green', fontWeight: 'bold' }}>Login</h2>
            <Form style={{ height: "50vh", width: "50vw", padding: 10 }}>
              <div style={{ color: 'red', textAlign: 'center' }}>{message}</div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
              </Form.Group>
              <p onClick={() => { navigate('/forget-password') }} style={{ textAlign: 'right', cursor: 'pointer', color: 'green' }}>Forget password</p>
              <Button variant="success" type="submit" style={{ float: 'right' }} onClick={handleLogin}>
                Login
              </Button>
              <div onClick={() => { navigate('/register') }} style={{ textAlign: 'center', marginTop: '10px', color: 'green', cursor: 'pointer' }}>New User Register</div>
            </Form>
          </div>
      }
    </>
  )
}

export default Login