import styled from "styled-components";

export const CardGridEdit = styled.div`
    display:block;
    overflow-y: scroll;
    margin-left: 15%;
    margin-right: 1%;

    width: 100%;
    height: 100%;
`;

export const CardDivEdit = styled.div`
    
    width: 250px;
    height: 400px;
    
    display:inline-block;
    margin-right:10px;

    padding-top: 350px;

    background-repeat: no-repeat;
    background-size: 250px 350px;
    background-position: top;

    div {
        display:flex;
        flex-direction:row;
        justify-content: space-evenly;
        align-items: center;

        width: 100%;
        height: 40px;

    }

    button {
        background-color:rgba(0,0,0,0);
        width:70px;
        border:none;
        height:30px;
    }

    #btn_add {
        background-image: url('./assets/add_btn.png');
        background-repeat: no-repeat;
        background-size: 30px 30px;
        background-position: center;
    }

    #btn_del {
        background-image: url('./assets/remove_btn.png');
        background-repeat: no-repeat;
        background-size: 30px 8px;
        background-position: center;
    }

`;