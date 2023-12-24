import React, { useEffect, useState } from 'react'

function Cards({room}) {

    return (
        <>
            <div className="card m-5">
                <h5 className="card-header">{`${room.name}`}</h5>
                <div className="card-body">
                    <h5 className="card-title">{room.type}</h5>
                    <p className="card-text">{`Rent per day: ${room.Rent}`}</p>
                    <a className="btn btn-primary">Book Room</a>
                </div>
            </div>
        </>
    )
}

export default Cards