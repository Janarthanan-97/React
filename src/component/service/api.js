import axios from "axios"

const baseURL = "http://localhost:3001"

const userApi = axios.create({
    baseURL: baseURL
});

export default userApi;