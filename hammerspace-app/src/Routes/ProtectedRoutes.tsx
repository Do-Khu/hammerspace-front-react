import React from 'react';
import Routering from './routes';
import UserService from '../Services/UserServices';
import Login from '../Pages/Login';

const userService = new UserService();
const ProtectedRoutes = ({children}: any) => {
    const userAuth = userService.userAuthenticated();
    return userAuth ? children : <Login />
}

export default ProtectedRoutes;