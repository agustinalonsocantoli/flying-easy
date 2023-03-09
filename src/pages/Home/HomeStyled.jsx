import styled from "styled-components";

export const HomeBox = styled.div`

`;

export const ImgBackground = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), ${props => `url(${props.image})`};
    background-repeat: no-repeat;
    background-size: cover;
    height: 710px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    color: #FFFFFF;
    padding-bottom: 8%;

    h1 {
        font-family: 'Rubik', sans-serif;
        font-weight: 900;
        font-size: 40px;
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    h2 {
        font-family: 'Rubik', sans-serif;
        font-weight: 900;
        font-size: 35px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;