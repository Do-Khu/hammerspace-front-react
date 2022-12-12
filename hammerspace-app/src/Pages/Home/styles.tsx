import styled from 'styled-components';

export const MenuBar = styled.div`
    color: #fff;
    width:5vw;
    height:100vh;

    background-color: #473769;

    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    padding-top:30px;
    padding-left:15px;
    padding-right:15px;



    #btn_inv_view {
        display:flex;
        justify-content:center;
        aling-items:center;

        width: 4vw;
        height: 15vh;

        background-color:rgba(0,0,0,0);

        background-image: url('./assets/invetary-view-icon.png');
        background-repeat: no-repeat;
        background-size: contain;

        margin-top:10px;
    }

    #btn_inv_add_del {
        display:flex;
        justify-content:center;
        aling-items:center;

        width: 4vw;
        height: 15vh;

        background-color:rgba(0,0,0,0);

        background-image: url('./assets/invetary-add-del-icon.png');
        background-repeat: no-repeat;
        background-size: contain;

        margin-top:10px;
    }

    #btn_deck_view {

        display:flex;
        justify-content:center;
        aling-items:center;

        width: 4vw;
        height: 15vh;

        background-color:rgba(0,0,0,0);

        background-image: url('./assets/deck-view.png');
        background-repeat: no-repeat;
        background-size: contain;

        margin-top:10px;
    }

    #btn_deck_add_update {

        display:flex;
        justify-content:center;
        aling-items:center;

        width: 4vw;
        height: 15vh;

        background-color:rgba(0,0,0,0);

        background-image: url('./assets/deck-add-remove.png');
        background-repeat: no-repeat;
        background-size: contain;

        margin-top:10px;
    }

    #btn_userlogout {

        display:flex;
        justify-self:center;
        aling-items:center;

        width: 3vw;
        height: 3vh;

        background-color:rgba(0,0,0,0);

        background-image: url('./assets/logout.png');
        background-repeat: no-repeat;
        background-size: contain;

    }

`;


export const MainContainer = styled.div`
    color: #fff;
    width:95vw;
    height:100vh;
    
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: end;


    #StorageView {
        display: flex;
        flex-direction:column ;
        justify-content: center;
        align-items: center;

        width:100%;
        height:100%;
    }

    #StorageAddDel {
        display: flex;
        flex-direction:column ;
        justify-content: center;
        align-items: center;
        

        color:#000;

        width:100%;
        height:100%;
    }
`;

export const Container = styled.div`
    color: #fff;
    width:100vw;
    height:100vh;

    overflow-x:hidden;
    display: flex;
    flex-direction:row;
`;

export const TitleDiv = styled.div`
    color: #000;
    width: 100%;
    height: 200px;

    display:flex;
    justify-content: center;
    align-items: center;

`;