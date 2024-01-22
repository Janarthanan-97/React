import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import userRequest from '../service/userRequest'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HashLoader from "react-spinners/HashLoader";

function PasswordReset() {
    let { resetToken } = useParams()
    const [password, setPassword] = useState()
    const [message, setMessage] = useState()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true)
        let res = await userRequest.resetPassword({ resetToken, password })
        if (res == "Password reset successfully") {
            navigate('/login')
        }
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
                        <h2 style={{ textAlign: 'center', color: 'green', fontWeight: 'bold' }}>Reset password</h2>
                        <Form style={{ height: "50vh", width: "50vw", padding: 10 }}>
                            <div style={{ color: 'red', textAlign: 'center' }}>{message}</div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={e => setPassword(e.target.value)} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <div onClick={() => { navigate('/login') }} style={{ textAlign: 'right', margin: '10px', color: 'green', cursor: 'pointer' }}>Login</div>

                            <Button variant="success" type="submit" style={{ float: 'right' }} onClick={handleClick}>
                                Submit
                            </Button>
                        </Form>
                    </div>
            }
        </>
    )
}

export default PasswordReset