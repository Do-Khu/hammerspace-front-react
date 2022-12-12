import styled from "styled-components";

export const Input = styled.input`
    color: #000;
    font-size: 20px;
    background-color: transparent;
    border: 2px solid #6a6a6a;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;

    box-shadow: 0 4px 8px 0 rgba(0,0,0, 0.2), 0 6px 20px 0 rgba(0,0,0, 0.19);
    padding 16px 20px;
    width: 70%;
    height:40px;

    input::placeholder {
        color: #FFF;
        font-size: 20px;
        opacity: 0.7;
    }
`;

export const Button = styled.button`
    color: #FFF;
    font-size: 20px;
    border: 30px;
    background-color: #6a6a6a;        
    background-image: url('./assets/search-icon.png');
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position:7px center;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;


    width: 40px;
    height: 40px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0, 0.2), 0 6px 20px 0 regba(0,0,0, 0.19);
    cursor: pointer;

    ${
        props => props.disabled === false &&`
            &:hover {
                background-color: #FFF;
                color: #6a6a6a;
            }
        `
    }

    ${
        props => props.disabled &&`
            opacity: 0.7
        `
    }
`;

export const Container = styled.div`    
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width:100%;
    height:200px;
    
    div {
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
        height:50px;
    }
`;