import styled from "styled-components";

export const FooterBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: rgb(105,30,164);
    background: -moz-linear-gradient(0deg, rgba(105,30,164,1) 14%, rgba(179,54,183,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(105,30,164,1) 14%, rgba(179,54,183,1) 100%);
    background: linear-gradient(0deg, rgba(105,30,164,1) 14%, rgba(179,54,183,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#691ea4",endColorstr="#b336b7",GradientType=1);
    padding: 2%;
`;

export const LinkBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;

    svg {
        color: #F8F8F8;
        font-size: 25px;
    }

    a {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #FFFFFF;
        font-size: 15px;
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
    }
`;

export const NameBox = styled.div`
    text-align: center;

    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        font-size: 18px;
        color: #cbb8e8;
    }

    h4 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 13px;
        color: #F8F8F8;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        color: #cbb8e8;
        font-size: 18px;
        margin-top: 30px;
    }
`;

export const AdressBox = styled.div`

    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #FFFFFF;
        font-size: 17px;
        padding-bottom: 5px;
        border-bottom: 1px solid #FFFFFF;
        margin-bottom: 20px;
        width: 80%;
        text-align: center;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        color: #cbb8e8;
        font-size: 13px;
        margin-top: 10px;
    }
`