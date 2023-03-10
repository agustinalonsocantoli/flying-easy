import styled from "styled-components";

export const PopularBox = styled.div`
    width: 80%;
    margin: 10px auto 50px auto;

    h1 {
        font-family: 'Rubik';
        font-weight: 500;
        font-size: 40px;
        text-align: center;
        padding-bottom: 10px;
        border-bottom: 1px solid #000000;
        width: 70%;
        margin: 0 auto 20px auto;
    }
`;

export const ImgBox = styled.div`
    height: 300px;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
`;

export const ContentBox = styled.div`
    position: relative;

    h2 {
        position: absolute;
        bottom: 0;
        left: 10px;
        z-index: 200;
        color: #FFFFFF;
        font-family: 'Rubik';
        font-weight: 700;
        font-size: 30px;
    }
`;