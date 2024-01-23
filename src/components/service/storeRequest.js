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

const storeRequest = {
    getItem: async()=>{
        const res = await request.get('/items/getItem')
        return res.data.message
    },
    updateItem: async(object)=>{
        let res = await request.put('/items/updateItem', object)
        return res.data.message
    },
    deleteItem: async (object) =>{
        let res = await request.put('/items/deleteItem', object)
        return res.data.message;
        
    },
    addItem: async (object) => {
        let res = await request.post('/items/addItem', object)
        return res.data.message
    }

}

export default storeRequest;

