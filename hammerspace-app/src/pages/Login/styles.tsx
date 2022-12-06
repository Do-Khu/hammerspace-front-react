import styled from "styled-components";
export const Container = styled.div`
    background-color: #000000;
    color: #f0f0f0;

    display:flex;
    justify-content:center;
    align-items: center;
    height: 100vh;
    min-width: 100vw;
    background-color: #383838;
`;

export const LoginError = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;

    color: #000;

    background-image: url('./assets/login_error.png');
    background-repeat: no-repeat;
    background-size: contain;

    height:500px;
    width:350px;
    min-width:200px;

    position: absolute;
    padding-left:40px;
    padding-right:30px;
    padding-top: 250px;

    p {
        font-size:14px;
        font-weight: bold;
    }

    ########################### ******************************* arrumar o caralho da troca de estado do login error.

`;

export const Form = styled.form`
    display: flex;
    padding: 3rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #201d1d;
    border-radius: 45px;
    max-width: 450px;
    gap: 30px 0px;

    h1 {
        color: white;
        font-size: 24px;
        font-weight: bold;
    }

    p {
        color: white;
        font-size: 16px;
        font-weinght: bold;
    }

    a {
        color: white;
        font-size: 14px;
    }
`;
