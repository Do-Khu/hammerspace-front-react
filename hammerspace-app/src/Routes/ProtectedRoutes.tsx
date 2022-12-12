import React from 'react';
import Routering from './routes';
import UserService from '../Services/UserServices';

const userService = new UserService();
const ProtectedRoutes = ({children}: any) => {
    const userAuth = userService.userAuthenticated();
    return userAuth ? children : <Routering />
}

export default ProtectedRoutes;