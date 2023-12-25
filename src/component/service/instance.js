import axios from "axios";

const baseURL = import.meta.env.VITE_URL;

const authInstance = axios.create({
    baseURL : baseURL,
    timeout : 5000,
    headers : {
        "Content-Type": 'application/json'
    }
});

const protectedInstance = axios.create({
    baseURL : baseURL,
    timeout : 5000,
    headers: {
        "Content-Type": 'application/json'
    }
})

protectedInstance.interceptors.request.use(
    config=>{
    const token = sessionStorage.getItem('token');
    if(token){
        config.headers['Authorization'] = 'bearer '+ token
    }
    return config;
})

export default {
    authInstance,
    protectedInstance
}