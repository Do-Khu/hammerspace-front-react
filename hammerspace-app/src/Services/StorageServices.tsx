import axios from "axios";

export default class StorageServices{

    axios: any;
    constructor (){
        this.axios = axios.create({
            baseURL: process.env.REACT_APP_API_LOGIN,
            headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"*", "Access-Control-Allow-Origin" : "*", "Authorization":"Bearer "+localStorage.getItem("token")}
        })
    }

    async queryStorage () {
        const {data} = await this.axios.get("/api/storage");
        if (data) {
            return data;
        } else {
            return false;
        }
    }

    async queryCard (cardName: string) {
        const {data} = await this.axios.get("/api/storage/"+cardName);
        if (data) {
            return true;
        } else {
            return false;
        }
    }

    async addCard (cardid: {"cardId": number}) {
        /*
            cardId: int
        */
        const {data} = await this.axios.post("/api/storage");
        if (data) {
            return true;
        } else {
            return false;
        }
    }

    async delete (cardName: string) {
        const {data} = await this.axios.get("/api/storage/"+cardName);
        if (data) {
            return true;
        }else{
            return false;
        }
    }
};