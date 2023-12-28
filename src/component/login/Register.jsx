import React, { useState } from 'react'
import request from '../service/request';

function Register() {

    const [password, setPassword] = useState();
    const [emailID, setUserID] = useState();

    const handleRegister = async ()=>{
        let res = await request.createUser({
            password,
            emailID
        })
        alert(res)
    }
    
    return (
        <><div id="register" className="m-5 box-shadow p-5">
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email-ID</label>
                <div className="col-sm-10">
                    <input type='email' className="form-control" placeholder='Enter UserID' onChange={(e)=>{setUserID(e.target.value)}}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
            </div>
            <div className="col-auto float-end">
                <button className="btn btn-primary mb-3" onClick={handleRegister}>Register</button>
            </div>
            <br />
        </div></>
    )
}

export default Register