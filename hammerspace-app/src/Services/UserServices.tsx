import axios from "axios";

export default class UserService {
    axios: any;
    constructor (){
        this.axios = axios.create({ 
            baseURL: process.env.REACT_APP_API_LOGIN
        });
    }
    

    async login (qData:any) {
    const {data} = await this.axios.post("/auth", qData, {Headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"*", "Access-Control-Allow-Origin" : "*"}});
    if (data) {
        localStorage.setItem("name", data.name);
        localStorage.setItem("email", data.email);
        localStorage.setItem("token", data.token);

        return true;
    }
    return ;
   };

    userAuthenticated () {
        return localStorage.getItem("token") != null ? true : false;
    }
    async logout () {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("token");
    }
}