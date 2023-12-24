import React from 'react'
import { Link } from 'react-router-dom'

function RoomLink() {
    return (
        <li className="nav-item">
            <Link to="/rooms" className='nav-link active'>Rooms</Link>
        </li>
    )
}

export default RoomLink