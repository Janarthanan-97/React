import instance from "./instance";

const getRooms = async ()=>{
    try {
        console.log("fetching room")
        let res = await instance.protectedInstance.get('/rooms')
        if(res.data){
            return res.data
           }
        
    } catch (error) {
        console.log(error)
    }

}

export default  getRooms