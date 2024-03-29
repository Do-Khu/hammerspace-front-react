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
