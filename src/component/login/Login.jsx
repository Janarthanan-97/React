import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import request from '../service/request';


function Login() {

    const [emailID, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handlelogin = async()=>{
        let res = await request.login({emailID, password});
        alert(res)
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
                    <div id="forgetPasswordDiv" className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder='Enter password' onChange={(e)=>{setPassword(e.target.value)}}/>
                        <span><Link to='/forget-password'>Forget password?</Link></span>
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

export default Login