import axios from "axios";

const baseURL = import.meta.env.VITE_URL;

const request = axios.create({
    baseURL: `${baseURL}/users`
})

const userRequest = {
    login: async(user)=>{
        const res = await request.put('/login', user);
        return res.data
    },
    register: async(user)=>{
        const res = await request.post('/register', user);
        console.log(res.data)
        return res.data;
    }
}

export default userRequest