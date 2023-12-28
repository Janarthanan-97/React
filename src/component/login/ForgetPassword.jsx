import React, { useState } from 'react'
import request from '../service/request';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [emailID, setUserName] = useState('');
    const navigate = useNavigate()


    const handlelogin = async () => {
        let res = await request.forgetPassword(emailID)
        if(res = "Token send to your Email"){
            navigate('/reset-password')
        }
    }

    return (
        <div>
            <div id="login" className='m-5 box-shadow p-5'>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder='Enter UserID' onChange={(e) => { setUserName(e.target.value) }} />
                    </div>
                </div>
                <div className="col-auto float-end">
                    <button className="btn btn-primary mb-3" onClick={handlelogin}>Reset Password</button>
                </div>
                <br />
            </div>
        </div>
    )

}

export default Login