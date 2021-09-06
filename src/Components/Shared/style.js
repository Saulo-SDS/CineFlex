import styled from 'styled-components';

const Container = styled.div`
    margin-top: 67px;
`;

const Description = styled.div`
    font-family: Roboto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 110px;
    font-size: 24px;
    font-weight: ${(({weigth}) => weigth ? weigth : "400")};;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: ${(({color}) => color ? color : "#293845")};
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-size: 26px;
    line-height: 30px;
    height: 117px;
    width: 375px;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #d0e5f7;
    background-color: #DFE6ED;
    color: #293845;
    p {
    margin-left: 15px;
    }
`;

const BackImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 89px;
    width: 64px;
    border-radius: 2px;    
    margin-left: 10px;
    background-color: #ffffff;
    img {
        height: 72px;
        width: 48px;
    }
`;

const ConfirmButton = styled.div`
    margin: 50px 0 150px 0;
    text-align: center;
    pointer-events: ${({pointer}) => pointer};
    button {
        height: 42px;
        width: 225px;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
        border: none;
        border-radius: 3px;
        color: #ffffff;
        background-color: #E8833A;
    }
`;

export {
    Container,
    Description,
    Footer,
    BackImage,
    ConfirmButton
}