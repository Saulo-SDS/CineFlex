import styled from "styled-components";

const InfoSession = styled.div`
    margin: 0 38px 20px 38px;

    p {
        font-family: roboto;
        font-size: 20px;
        font-style: normal;
        line-height: 23px;
        letter-spacing: 0.02em;
        color: #293845;
        margin-bottom: 20px;
    }

    div {
        margin-bottom: 30px;
    }
`;

const Button = styled.button`
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    height: 43px;
    width: 83px;
    border: none;
    border-radius: 3px;
    background-color: #E8833A;
    color: #ffffff;
    margin-right: 10px;
`;

export {
    InfoSession,
    Button
}