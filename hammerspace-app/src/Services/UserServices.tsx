import axios from "axios";

export default class UserService {
    axios: any;
    constructor (){
        this.axios = axios.create({ 
            baseURL: process.env.REACT_APP_API_LOGIN
        });
    }
    
    Headers = {"Content-Type":"application/json","Access-Control-Allow-Headers":"*", "Access-Control-Allow-Origin" : "*"};

    async login (qData:any) {
        const {data} = await this.axios.post("/auth", qData, this.Headers);
        if (data) {
            localStorage.setItem("name", data.name);
            localStorage.setItem("email", data.email);
            localStorage.setItem("token", data.token);

            return true;
        }
        return ;
   };

   async register (qData: any){
       const {data} = await this.axios.post('/register', qData, this.Headers);
       //TODO: VERIFICAR O 200
   };

    userAuthenticated () {
        return localStorage.getItem("token") != null ? true : false;
    };

    async logout () {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("token");
    };
}