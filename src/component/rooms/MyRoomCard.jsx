import React from 'react'

function MyRoomCard({room}) {
  return (
    <div className="card m-5">
                <h5 className="card-header">{`${room.name}`}</h5>
                <div className="card-body">
                    <p className="card-text">{`Start Date: ${room.BookingHistory.startDate}`}</p>
                    <p className="card-text">{`Start Date: ${room.BookingHistory.endDate}`}</p>
                </div>
            </div>
  )
}

export default MyRoomCard