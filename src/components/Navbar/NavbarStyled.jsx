import styled from "styled-components";

export const NavbarBox = styled.div`
    display: flex;
    align-itemns: center;
    justify-content: flex-end;
    padding: 2%;
    padding-right: 5%;
    position: absolute;
    right: 0;
    left: 0;

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
        font-size: 20px;
        color: #FFFFFF;

        svg {
            font-size: 25px;
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