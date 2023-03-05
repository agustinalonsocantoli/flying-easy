import styled from "styled-components";

export const RegisterBox = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    background: rgb(0 0 0 / 80%);
`;

export const Form = styled.form`
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 400px;
    height: 400px;
    flex-direction: column;
    background: rgb(255 255 255);
    padding: 1% 2%;
    border-radius: 12px;

    h1 {
        text-align: center;
        margin-bottom: 30px;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        color: #2677ca;
        font-size: 35px;
    }

    label {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 18px;
        color: #ac39b8;
    }

    input {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 15px;
        border: none;
        outline: none;
        border-bottom: 2px solid #ac39b8;
        color: #ac39b8;
        padding: 5px 3px;
        margin-bottom: 10px;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;

    button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 15px;
        width: 40%;
        border: none;
        padding: 10px 20px;
        background: #2677ca;
        color: #FFFFFF;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        svg {
            color: #FFFFFF;
            font-size: 18px;
        }

        &:active {
            transform: scale(0.9);
            transition: all 200ms ease;
        }
    }
`;