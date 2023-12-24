const userID = sessionStorage.getItem('userID');
let value;
if(userID != ""){
    value = true;
}
else{
    value = false
}

const initialState = {
    isLoggedIn : value
}

const userReducer = (state = initialState, action) => {
   
    switch (action.type) {
        
        case "TRUE":
            return { isLoggedIn : true }

        case 'FALSE':
            return { isLoggedIn : false }

        default:
            return state;
    }
}

export default userReducer