import React, { useState } from 'react'
import { addRoom } from '../service/rooms';

function AddRoom() {

  const [name, setName] = useState();
  const [type, setType] = useState()
  const [Rent, setRent] = useState()
  const [furnished, setFurnished] = useState()

  const handleAddRoom = async ()=>{
    const addRoomObject = {
        name, type, Rent, furnished
    }
    let res = await addRoom(addRoomObject);
        alert(res)
  }

  return (
    <div id="register" className="m-5 box-shadow p-5">
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Room Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder='Enter Room name' onChange={(e)=>{setName(e.target.value)}} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Dulex/Non Dulex</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder='Dulex/Non Dulex' onChange={(e)=>{setType(e.target.value)}}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Rent per Day</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder='Rent per day' onChange={(e)=>{setRent(e.target.value)}}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Furnished/Non furinshed</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder='Furnished/Non furinshed' onChange={(e)=>{setFurnished(e.target.value)}}/>
                </div>
            </div>
            <div className="col-auto float-end">
                <button className="btn btn-primary mb-3" onClick={handleAddRoom}>Add Room</button>
            </div>
            <br />
        </div>
  )
}

export default AddRoom