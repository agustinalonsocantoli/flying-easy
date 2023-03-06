import styled from "styled-components";

export const NavbarBox = styled.div`
    display: flex;
    align-itemns: center;
    justify-content: space-between;
    padding: 2%;
    padding-right: 5%;
    background: #2677ca;
    margin-bottom: 2%;

    button {
        border: none;
        cursor: pointer;
        outline: none;
        background: transparent;
        display: flex;
        gap: 5px;
        align-itemns: center;
        justify-content: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 17px;
        color: #FFFFFF;

        svg {
            font-size: 20px;
        }

        &:hover {
            transform: scale(0.95);
            transition: all 400ms ease;
        }

        &:active {
            transform: scale(1.1);
            transition: all 200ms ease;
        }
    }
`;