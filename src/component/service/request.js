import userApi from "./api";


const request = {
    createUser : async (object)=>{
        console.log(object)
        try {
            let res = await userApi.post('/', object)
            return res.data.message
        } catch (error) {
           alert(error)
        }
    },
    login: async(object)=>{
        try {
            let res = await userApi.post('/login', object)
            return res.data.message;
        } catch (error) {
            alert(error)
        }

    },

    forgetPassword: async(emailID)=>{
        try {
            let res = await userApi.post('/forget-password', {emailID})
            return res.data.message
        } catch (error) {
            console.log(error)
        }
    },
    
    resetPassword: async(object)=>{
        console.log(object)
        try {
            let res = await userApi.post('/reset-password', object)
            return res.data.message
        } catch (error) {
            console.log(error)
        }
    }
}

export default request