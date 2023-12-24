import instance from "./instance";

const authService = {
    signup: async (user)=>{
        try {
            const res = await instance.authInstance.post('/users/addUser', user)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    },
    signin : async (user)=>{
        try {
            const res = await instance.authInstance.post('/users/login', user);
            if(res.data){
                console.log("user login successfull");
                sessionStorage.setItem('token', res.data);
                sessionStorage.setItem('userID', user.userName)
            }
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }
}

export default authService