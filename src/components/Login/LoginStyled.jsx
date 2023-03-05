import styled from "styled-components";

export const LoginBox = styled.div`
    display: flex;
`;

export const ImgBox = styled.div`
    width: 50vw;
    height: 100vh;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: end;
    width: 190px;
    position: relative;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    div {
        display: flex;
        flex-direction: column;
        position: absolute;
        right: -35px;
        bottom: 15px;

        h3 {
            margin-left: 10px;
            font-family: 'Rubik', sans-serif;
            font-weight: 600;
            font-size: 20px;
            color: #2857BE;
        }

        h3:nth-child(2) {
            margin-left: 0;
            color: #79159D;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;

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
        padding: 5px 0;
        padding-left: 25px;
        margin-bottom: 10px;
        width: 100%;
    }
`;

export const ContentBox = styled.div`
    height: 100vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 45px;
        width: 55%;
        text-transform: capitalize;
        text-align: center;
        margin: auto;
        margin-bottom: 40px;
        color: #2677ca;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
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

export const IconBox = styled.div`
    width: 100%;
    position: relative;
`;

export const Icon = styled.div`
    position: absolute;
    bottom: 12px;

    svg {
        color: #ac39b8;
        font-size: 20px;
    }
`;
