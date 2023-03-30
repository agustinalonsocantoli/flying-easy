import styled from "styled-components";

export const ReviewsBox = styled.div`
    margin: 0 6% 35px 6%;
    position: relative;

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

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        color: #2677ca;
        font-size: 15px;
    }
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

    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 15px;
    }
`;

export const ArrowLeft = styled.div`
    position: absolute;
    left: -40px;
    top: 60%;
    border-radius: 8px;
    padding 6px 7px 2px 7px;
    font-size: 15px;
    color: #FFFFFF;
    background-color: #2677ca;
    cursor: pointer;
`

export const ArrowRigth = styled.div`
    position: absolute;
    right: -40px;
    top: 60%;
    border-radius: 8px;
    padding 6px 7px 2px 7px;
    font-size: 15px;
    color: #FFFFFF;
    background-color: #2677ca;
    cursor: pointer;
`

export const MoveBox = styled.div`
    display: flex;
    gap: 25px;
    transform: translate(-${props => props.translate <= props.max ? props.translate : props.max}px);
    transition: transform 600ms ease;
`

export const Icon = styled.div`
    svg {
        color: #2677ca;
        font-size: 35px;
    }
`