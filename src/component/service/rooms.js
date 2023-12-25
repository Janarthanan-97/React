import instance from "./instance";

const getRooms = async (date)=>{
    try {
        console.log("fetching room")
        let res = await instance.protectedInstance.put('/rooms', date)
        if(res.data){
            return res.data
           }
        
    } catch (error) {
        console.log(error)
    }

}

const bookRoom = async (bookRoomObject)=>{
    try {
        let res = await instance.protectedInstance.put(`/rooms/bookRoom/${bookRoomObject.id}`, bookRoomObject)
        if(res.data){
           return res.data
        }
    } catch (error) {
        console.log(error)
    }
}

const getMyRoom = async ()=>{
    let res = await instance.protectedInstance.get('rooms/getMyRooms')
    return res.data
}

const addRoom = async(object)=>{
    try {
        const res = await instance.protectedInstance.post('/rooms/addRoom', object)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

const deleteRoom = async (id)=>{
    console.log(`/deleteRoom/${id}`)
    let res = await instance.protectedInstance.delete(`/rooms/deleteRoom/${id}`)
    return res.data
}

export  {getRooms, bookRoom, getMyRoom, addRoom, deleteRoom}