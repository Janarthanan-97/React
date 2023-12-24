import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import getRooms from '../service/rooms'
import { useNavigate } from 'react-router-dom'

function Rooms() {
  let navigate = useNavigate()
  let [rooms, setRooms] = useState([]) 

  const fetchRoomFunction = async () => {
    let res = await getRooms()
      setRooms(res);
  }

  useEffect(() => {
      fetchRoomFunction()
  }, [])

  return (
    <>
      {rooms.map(e => {
        return <Cards key={e._id} room={e} />
      })}
    </>
  )
}

export default Rooms