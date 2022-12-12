import React, { useState } from "react";
import CustomButton  from "../../Components/Button";
import  CardGrid from "../../Components/CardView";
import { MenuBar, MainContainer, Container } from "./styles";
import StorageServices from "../../Services/StorageServices";

const HomePage = () => {
    const storageHandler = new StorageServices();
    const cardsHandler = new StorageServices();

    const [storageData, setStorageData] = useState<any>([]);
    const [storageDataDisplay, setStorageDataDisplay] = useState<string>("none");
    const [storageAddDel, setStorageAddDel] = useState<any>([]); // esse vem do cards
    const [storageAddDelDisplay, setStorageAddDelDisplay] = useState<string>("none"); //esse manda pro stok

    const inventoryClick = (event: any) => {
        if (event.name === "btn_inv_view") {
            storageHandler.queryStorage().then((value: any)=>{
                setStorageData([...value]);
                setStorageDataDisplay("block");
            }).catch((err)=>{
                alert("Something gone worng..."+err);
            })
        }else{
            storageHandler.queryStorage().then((value: any)=>{ // parse to -> cards handler
                setStorageData([...value]);
                setStorageDataDisplay("block");
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
                <CardGrid 
                    id="StorageView"
                    cards={
                        storageData
                    }
                    display="block"
                    ></CardGrid>
                    <CardGrid 
                        id="StorageAddDel"
                        cards={
                            storageData
                        }
                        display="none"
                        ></CardGrid>
                                
            </MainContainer>
        </ Container>
    );

};

export default HomePage;