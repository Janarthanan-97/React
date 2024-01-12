import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import userRequest from '../service/userRequest';

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState()


  const handleRegister = async (event)=>{
    event.preventDefault()
    if(password==cpassword){
      const user = {name, email, password}
      const req = await userRequest.register(user)
      console.log(req)

    }
    console.log("Register")
  }

    return (
       <div className='box-shadow m-5 p-5 d-flex row justify-content-center align-items-center' style={{overflow:'auto'}}>
        <h2 style={{textAlign:'center', color:'green', fontWeight:'bold'}}>Register</h2>
        <Form className='container' style={{height:"50vh", width:"50vw", padding:10}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>{setName(e.target.value)}} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" onChange={(e)=>{setCpassword(e.target.value)}} />
      </Form.Group>

      <Button variant="success" type="submit" style={{float:'right'}} onClick={handleRegister}>
        Register
      </Button>
         </Form>
         <Link to='/' style={{textAlign:'center', marginTop:'10px', color:'green'}}>Already have an account</Link>
    </div>
    )
}

export default Register