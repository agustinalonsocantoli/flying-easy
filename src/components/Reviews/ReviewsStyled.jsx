import styled from "styled-components";

export const ReviewsBox = styled.div`
    margin: 0 3% 50px 3%;

    h1 {
        font-family: 'Rubik';
        font-weight: 500;
        font-size: 40px;
        text-align: center;
        width: 30%;
        margin: 0 auto 20px auto;
        padding-bottom: 10px;
        border-bottom: 1px solid #000000;
    }
`;

export const ContentBox = styled.div`
    display: flex;
    gap: 25px;
    overflow: hidden;
    padding: 20px;
`

export const Review = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    min-width: 250px;
    height: 200px;
    border-radius: 12px;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
`

export const ImgBox = styled.div`
    display flex;
    align-items: center;
    gap: 10px;

    img {
        object-fit: cover;
        width: 50px;
        height: 50px;
        border-radius: 999px;
    }
`;