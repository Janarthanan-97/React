import axios from "axios";

const baseURL = import.meta.env.VITE_URL


const authInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

const protectedInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
});


protectedInstance.interceptors.request.use(config => {
    let token = sessionStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = token;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default {
    authInstance,
    protectedInstance
}