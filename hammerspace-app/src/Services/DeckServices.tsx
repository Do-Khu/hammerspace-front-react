import axios from "axios";

export default class DeckServices{

    axios: any;
    constructor (){
        this.axios = axios.create({
            baseURL: process.env.REACT_APP_API_LOGIN,
            headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"*", "Access-Control-Allow-Origin" : "*", "Authorization":"Bearer "+localStorage.getItem("token")}
        })
    }

    async queryDeck (deckId: number) {
        // This dude send me a array
        const {data} = await this.axios.get("/api/decks/"+deckId);
        if (data) {
            return data;
        } else {
            return false;
        }
    }

    async addCard (cardId: {"cardId": number}, deckId: number) {
        const {data} = await this.axios.post("/api/decks/"+deckId+"/cards" , cardId);
        if (data) {
            return data;
        } else {
            return false;
        }
    }

    async delCard (cardId: number, deckId: number) {
        const {data} = await this.axios.get("/api/decks/"+deckId+"/"+cardId);
        if (data) {
            return data;
        } else {
            return false;
        }
    }
};