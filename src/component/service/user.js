import instance from "./instance";

const getUser = async()=>{
    try {
        const response = await instance.protectedInstance.get('/rooms')
    } catch (error) {
        console.log(error)
    }
}

export default getUser;