import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { getRooms } from '../service/rooms'


function Rooms() {

  let [rooms, setRooms] = useState([])
  let [startDate, setStartDate] = useState('');
  let [endDate, setEndDate] = useState('');
  let res;
  const handleDateSearch = ()=>{
    fetchRoomFunction()
  }

  const fetchRoomFunction = async () => {
    res = await getRooms({startDate, endDate})
    if(res.length == 0){
      alert("No rooms available on given date")
      setRooms(pre => res);
    }
    else{
      setRooms(pre => res);
    }
  }

  useEffect(() => {
    fetchRoomFunction()
  }, [])

  return (
    <>
      <div id="dateDiv" className="input-group mt-3 ms-5 me-5">
        <input type="date" className="form-control" onChange={(e)=>{setStartDate(e.target.value)}}/>
        <span className="input-group-text">to</span>
        <input type="date" className="form-control" onChange={(e)=>{setEndDate(e.target.value)}}/>
        <button type="button" className="btn btn-primary" onClick={handleDateSearch}>search</button>
      </div>
      {rooms.map(e => {
        return <Cards key={e._id} room={e} startDate ={startDate} endDate={endDate} func={fetchRoomFunction}/>
      })}
    </>
  )
}

export default Rooms