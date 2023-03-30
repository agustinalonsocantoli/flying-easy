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

export const Collage = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    padding: 2% 10%;
    gap: 10px;
    background: #F8F8F8;
    -webkit-box-shadow: 0px -2px 10px 0px rgba(204,204,204,0.6);
    -moz-box-shadow: 0px -2px 10px 0px rgba(204,204,204,0.6);
    box-shadow: 0px -2px 10px 0px rgba(204,204,204,0.6);

    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 12px;
    }

    h2 {
        font-family: 'Rubik';
        font-weight: 700;
        font-size: 30px;
        text-transform: uppercase;
        color: #2677ca;
    }
`;

export const Beach = styled.div`
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    width: 550px;
    height: 450px;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Mountain = styled.div`
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    width: 450px;
    height: 350px;
    display: flex;
    align-items: center;
    gap: 10px;

    h2 {
        color: #b336b7;
    }
`

export const City = styled.div`
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    width: 450px;
    height: 350px;
    display: flex;
    align-items: center;
    gap: 10px;

    h2 {
        color: #b336b7;
    }
`

export const Snow = styled.div`
    grid-row: 2 / 4;
    grid-column: 2 / 3;
    width: 550px;
    height: 450px;
    display: flex;
    align-items: center;
    gap: 10px;
`