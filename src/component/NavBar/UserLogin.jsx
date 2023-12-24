import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

function UserLogout() {
    const dispatch = useDispatch()
    const [userID, setUserID] = useState(sessionStorage.getItem('userID'))
    const navigate = useNavigate()
    const handleLogout = () => {

        sessionStorage.setItem('token', "")
        sessionStorage.setItem('userID', "")
        dispatch({type : 'FALSE'})
        navigate('/')

    }

    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {userID}
            </a>
            <ul className="dropdown-menu">
                <li className="dropdown-item" onClick={handleLogout}>Logout</li>
            </ul>
        </li>
    )
}



function UserLogin() {
    return (
        <li className="nav-item">
            <Link to="/" className='nav-link active'>Login</Link>
        </li>
    )
}

export { UserLogout, UserLogin as default }

