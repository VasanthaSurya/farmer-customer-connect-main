import axios from "../helpers/axios";
import { authConstants } from "./constants"

// const user = JSON.parse(localStorage.getItem('user'));
// console.log(user['firstName'])

export const login = (user) => {

    // console.log(user);

    return async (dispath) => {

        dispath({ type: authConstants.LOGIN_REQUEST });
        try{
            const res = await axios.post('http://localhost:8000/api/admin/signin', {
                ...user
            });
            if(res.status === 200){
                const { token, user } = res.data;
                localStorage.setItem('token',token);
                localStorage.setItem('user',JSON.stringify(user));
                dispath({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: {
                        token, user
                    }
                });
            } else {
                if(res.status === 400) {
                    dispath({
                        type: authConstants.LOGIN_FAILURE,
                        payload:{ error: res.data.error }
                    });
                }
            }
        }
        catch(error){
            alert("Email or password is wrong")
        }

        

    }
}


export const isUserLoggedIn = () => {
    return async dispath => {
        const token = localStorage.getItem('token');
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            dispath({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        } else {
            dispath({
                type: authConstants.LOGIN_FAILURE,
                payload:{ error: "Failed to Login" }
            });
        }
    }
}

export const signout = () => {
    
    return async dispatch => {
        dispatch({ type: authConstants.LOGOUT_REQUEST });
        const res = await axios.post('/admin/signout');
        console.log(res.status);
        if(res.status === 200){
            // console.log("Signout check")
            localStorage.clear();
            dispatch({ type: authConstants.LOGOUT_SUCCESS });
            window.location = "/"
        }else{
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload: { error: res.data.error }
            });
            
            window.location = "/"
        }
        
    }
}