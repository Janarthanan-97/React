import React, { useEffect, useState } from 'react'
import { getMyRoom } from '../service/rooms'
import MyRoomCard from './MyRoomCard'

function MyRooms() {
  const [myRooms, setMyRooms] = useState([])
  
  const getMyRoomFunction = async()=>{
    const rooms = await getMyRoom()
    setMyRooms(rooms)
  }

  useEffect(()=>{
    getMyRoomFunction();
  }, [])
   
  return (
    <>
    {myRooms.map(e=>{
      return <MyRoomCard key={`${e.name} - ${e.BookingHistory.startDate}`} room = {e} />
    })}
    </>
  )
}

export default MyRooms