import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import userRequest from '../service/userRequest'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function PasswordReset() {
    let { resetToken } = useParams()
    const [password, setPassword] = useState()
    const [message, setMessage] = useState()
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault();
        let res = await userRequest.resetPassword({ resetToken, password })
        if(res=="Password reset successfully")
        {
          navigate('/login')
        }
        setMessage(res)
    }

    return (
        <div className='box-shadow m-5 p-5 d-flex row justify-content-center align-items-center'>
            <h2 style={{ textAlign: 'center', color: 'green', fontWeight: 'bold' }}>Reset password</h2>
            <Form style={{ height: "50vh", width: "50vw", padding: 10 }}>
                <div style={{ color: 'red', textAlign: 'center' }}>{message}</div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setPassword(e.target.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Button variant="success" type="submit" style={{ float: 'right' }} onClick={handleClick}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default PasswordReset