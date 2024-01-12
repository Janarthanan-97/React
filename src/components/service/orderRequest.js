import axios from "axios";

const baseURL = import.meta.env.VITE_URL;

const request = axios.create({
    baseURL : baseURL
})

request.interceptors.request.use(config=>{
    const token = localStorage.getItem('token');
    if(token){
        config.headers.Authorization = 'bearer '+ token
    }
    return config;
})

const orderRequest = {
    addOrder: async ()=>{
        let res = request.post('/orders/addOrder');

    }
}

export default orderRequest;