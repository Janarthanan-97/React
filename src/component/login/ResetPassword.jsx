import React, { useState } from 'react'
import request from '../service/request';
import { useNavigate } from 'react-router-dom';


function ResetPassword() {
    const [emailID, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('')
    let navigate = useNavigate()
  
    
    const handlelogin =  async ()=>{
        let res = await request.resetPassword({emailID, password, token})
        alert(res)
        navigate('/')
    }

    return (
        <div>
            <div id="login" className='m-5 box-shadow p-5'>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder='Enter UserID' onChange={(e)=>{setUserName(e.target.value)}} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder='Enter password' onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Token</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPassword" placeholder='Enter Token' onChange={(e)=>{setToken(e.target.value)}}/>
                    </div>
                </div>
                <div className="col-auto float-end">
                    <button className="btn btn-primary mb-3" onClick={handlelogin}>Login</button>
                </div>
                <br />
            </div>
        </div>
    )
    
}

export default ResetPassword