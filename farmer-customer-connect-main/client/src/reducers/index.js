import authReducer from './auth_reducers';
import userReducer from './user_reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
});

export default rootReducer;