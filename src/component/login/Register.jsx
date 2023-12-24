import React, { useState } from 'react'
import authService from '../service/auth'
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [userID, setUserID] = useState();
    const navigate = useNavigate();

    const handleRegister = async ()=>{
        console.log(name, password, userID)
        await authService.signup({name, password, userID})
        navigate('/login')
    }
    
    return (
        <div><div id="register" className="m-5 box-shadow p-5">
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder='Enter name' onChange={(e)=>{setName(e.target.value)}} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">UserID</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder='Enter UserID' onChange={(e)=>{setUserID(e.target.value)}}/>
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
        </div></div>
    )
}

export default Register