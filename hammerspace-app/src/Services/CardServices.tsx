import axios from "axios";

export default class CardServices{

    axios: any;
    constructor (){
        this.axios = axios.create({
            baseURL: process.env.REACT_APP_API_LOGIN,
            headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"*", "Access-Control-Allow-Origin" : "*", "Authorization":"Bearer "+localStorage.getItem("token")}
        })
    }

    async queryCard (cardName: string) {
        // this dude send me a array
        const {data} = await this.axios.get("/api/cards/search"+cardName);
        if (data) {
            return data;
        } else {
            return false;
        }
    }
};