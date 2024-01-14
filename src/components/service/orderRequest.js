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
    addOrder: async (object)=>{
        let res = await request.post('/orders/addOrder', object);
        console.log(res.data)

    },
    getAllOrder: async ()=>{
        let res = await request.get('/orders/getAllOrder')
        return res.data;
    },
    getOrder : async(object)=>{
        let res = await request.put('/orders/getOrder', object)
        return res.data.message

    }
}

export default orderRequest;