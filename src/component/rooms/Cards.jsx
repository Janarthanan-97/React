import React, { useEffect, useState } from 'react'
import { bookRoom, deleteRoom } from '../service/rooms'

function Cards({ room, startDate, endDate, func }) {

    const handleBookRoom = async () => {
        if (startDate != "" && endDate != "") {
            const object = {
                id: room._id,
                token: sessionStorage.getItem("token"),
                startDate,
                endDate
            }

            let res = await bookRoom(object)
            if (res) {
                alert(res)
            }
        }
        else {
            alert("Please enter BOOKING START DATE and BOOKING END DATE")
        }
    }

    const handleDelete = async ()=>{
        let res = await deleteRoom(room._id)
        alert(res);
        func()
    }

    return (
        <>
            <div className="card m-5">
                <h5 className="card-header">{`${room.name}`}<span onClick={handleDelete}><i className="fa-solid fa-trash-can ms-5"></i>
                </span></h5>
                <div className="card-body">
                    <h5 className="card-title">{room.type}</h5>
                    <p className="card-text">{`Rent per day: ${room.Rent}`}</p>
                    <a className="btn btn-primary" onClick={handleBookRoom}>Book Room</a>
                </div>
            </div>
        </>
    )
}

export default Cards