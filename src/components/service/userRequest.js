import axios from "axios";

const baseURL = import.meta.env.VITE_URL;

const request = axios.create({
    baseURL: `${baseURL}/users`
})

const userRequest = {
    login: async(user)=>{
        const res = await request.put('/login', user);
        return res.data.message
    },
    register: async(user)=>{
        const res = await request.post('/register', user);
        return res.data.message;
    },
    verify: async(token)=>{
        const res = await request.get(`/verify/${token}`)
        return res.data.message
    },
    forgetPassword: async(object)=>{
        const res = await request.put('/forgetPassword', object)
        return res.data.message
    },
    resetPassword: async (object)=>{
        const res = await request.put('/passwordReset', object)
        return res.data.message
    }
}

export default userRequest