import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../../containers/Home'

const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={(props) => {
        const token = window.localStorage.getItem('token');
        if(token){
            return <Component {...props} />
        }else{
            return <Redirect to={`/signin`} />
        }
    }} />
}

export default PrivateRoute;