import axios from "axios";

export default class UserService {
    axios: any;
    constructor (){
        this.axios = axios.create({ 
            baseURL: process.env.REACT_APP_API_LOGIN
        });
    }

    async login (qData:any) {
    const {data} = await this.axios.post('/auth', qData);
    if (data) {
        localStorage.setItem("name", data.user.name);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("token", data.user.token);

        return true;
    }
    return false;
   };

}