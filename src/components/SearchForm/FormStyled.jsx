import styled from "styled-components";

export const SearchFormBox = styled.div`
    display: inline-block;
    text-align: left;
    padding: 3% 10% 2% 10%;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.4);
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.4);
    margin: 50px 0;
`;

export const FirstBox = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;

    div:first-child {
        display: flex;
        align-items: center;
        gap: 10px;
        border-right: 1px solid #000000;
        padding-right: 15px;
    }

    div:last-child {
        display: flex;
        align-items: center;
        gap: 5px;
        border-left: 1px solid #000000;
        padding-left: 15px;
    }

    input {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 20px;
    }

    label {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 20px;
    }

    select {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 20px;
        border: none;
        outline: none;
    }
`;


export const SecondBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    input {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 15px;
        padding: 7px 5px;
        border-radius: 8px;
        outline: none;
        border: none;
        text-align: center;

        &::placeholder { 
            color: rgba(0, 0, 0, 0.25); 
        }
    }
`;

export const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 17px;
    display: block;
    margin-left: auto;
    border: none;
    border-radius: 12px;
    background: #b336b7;
    color: #FFFFFF;
    padding: 15px 30px;
    cursor: pointer;
    
    &:active {
        transform: scale(0.9);
        transition: all 200ms ease;
    }
`;

export const Icon = styled.div`
    cursor: pointer;

    svg {
        font-size: 30px;
        color: rgba(0, 0, 0, 0.25);
    
        &:active {
            color: #000000;
            transform: scale(1.1);
            transition: all 200ms ease;
        }
    }
`;

export const Picker = styled.div`
    border: 1px solid #000000;
    border-radius: 8px;
`;