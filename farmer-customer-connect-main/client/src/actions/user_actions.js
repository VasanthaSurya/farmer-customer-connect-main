// import { Redirect } from "react-router";
import axios from "../helpers/axios";
import { userConstants } from "./constants";

export const signup = (user) => {
    console.log(user)
    // Constants.USER_REGISTER_REQUEST
    return async (dispath) => {

        dispath({ type: userConstants.USER_REGISTER_REQUEST });
        const res = await axios.post('http://localhost:8000/api/admin/signup', {
            ...user
        });
        console.log(res);
        if(res.status === 201){            
            const { message } = res.data;
            dispath({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: { message }
            });
        } else {
            if(res.status === 400) {
                dispath({
                    type: userConstants.USER_REGISTER_FAILURE,
                    payload:{ error: res.data.error }
                });
            }
        }
    }

}

