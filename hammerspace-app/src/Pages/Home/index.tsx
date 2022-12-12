import React, { useState } from "react";
import CustomButton  from "../../Components/Button";
import  CardGrid from "../../Components/CardView";
import  CardEdit from "../../Components/CardEdit";
import SearchBar from "../../Components/SearchBar";

import { MenuBar, MainContainer, Container, TitleDiv } from "./styles";

import StorageServices from "../../Services/StorageServices";
import CardServices from "../../Services/CardServices";

const HomePage = () => {
    const storageHandler = new StorageServices();
    const cardsHandler = new CardServices();

    const [storageData, setStorageData] = useState<any>([]);
    const [storageDataDisplay, setStorageDataDisplay] = useState<"flex" | "none">("none");
    const [storageAddDelDisplay, setStorageAddDelDisplay] = useState<"flex" | "none">("none");
    const [formData, setFormdata] = useState<any>([]);
    const [cardData, setCardData] = useState<any>([]);

    const handleChange = (event: {
        target: {
            name: string,
            value:string
        }
    }) => {
        setFormdata({...formData, [event.target.name]: event.target.value});
    }
    const handleSubmit = () => {
        // Make search
        cardsHandler.queryCard(formData.search).then((val: any) => {
            setCardData([...val]);
        }).catch((err: any)=>{
            alert("Something gone wrong..."+err);
        });
    }

    
    const inventoryClick = (event: any) => {
        
        if (event.target.id === "btn_inv_view") {
            setStorageDataDisplay("flex");
            setStorageAddDelDisplay("none");
            
            storageHandler.queryStorage().then((value: any)=>{
                setStorageData([...value]);
            }).catch((err)=>{
                alert("Something gone worng..."+err);
            })
        }else{
            setStorageAddDelDisplay("flex");
            setStorageDataDisplay("none");
            storageHandler.queryStorage().then((value: any)=>{
                setStorageData([...value]);
            }).catch((err)=>{
                alert("Something gone worng..."+err);
            })
        }
    }
    const deckClick = () => {
        console.log("button deck clicked!!!");
    }
    const userLogout = () => {
        console.log("user logout");
    }
    return (
        <Container>
            <MenuBar>
                {/* inv View */}
                <CustomButton
                id="btn_inv_view"
                Type="submit" 
                Placeholder="" 
                disabled={false}
                onClick={inventoryClick} />
                {/* inv add / delete */}
                <CustomButton
                id="btn_inv_add_del"
                Type="button" 
                Placeholder="" 
                disabled={false}
                onClick={inventoryClick} />

                {/* Deck view button */}
                <CustomButton
                id="btn_deck_view"
                Type="button" 
                Placeholder="" 
                disabled={false}
                onClick={deckClick} />
                {/* Deck add / update  button */}
                <CustomButton
                id="btn_deck_add_update"
                Type="button" 
                Placeholder="" 
                disabled={false}
                onClick={deckClick} />
                
                {/* Logout button */}
                <CustomButton
                id="btn_userlogout"
                Type="button" 
                Placeholder="" 
                disabled={false}
                onClick={userLogout} />
            </MenuBar>
            <MainContainer>
                    <div id="StorageView" style={{display:storageDataDisplay}}>
                        < TitleDiv>
                            <h1>Your colection</h1>
                        </TitleDiv>
                        <CardGrid 
                            cards={
                                storageData
                            }
                        ></CardGrid>
                    </div>
                    <div id="StorageAddDel" style={{display:storageAddDelDisplay}}>
                        <SearchBar 
                            onChange={handleChange}
                            onClick={handleSubmit}
                        />
                        <CardEdit 
                            cards={
                                cardData
                            }
                        ></CardEdit>
                    </div>
            </MainContainer>
        </ Container>
    );

};

export default HomePage;