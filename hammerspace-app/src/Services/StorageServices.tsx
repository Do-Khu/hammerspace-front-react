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
        console.log("request feita",data);
        if (data[0].id !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    async addCard (cardId: any) {
        /*
            cardId: int
        */
       console.log(cardId);
        const {data} = await this.axios.post("/api/storage", cardId);
        if (data) {
            return true;
        } else {
            return false;
        }
    }

    async delCard (cardId: number) {
        console.log(cardId);
        const {data} = await this.axios.get("/api/storage/"+cardId+"/remove");
        if (data) {
            return true;
        }else{
            return false;
        }
    }
};