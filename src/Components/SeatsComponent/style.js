import styled from "styled-components";

const SeatsSession = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-left: 24px;
`;

const SeatSession = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 26px;
    width: 26px;
    margin: 0 7px 18px 0;
    border-radius: 12px;
    background-color: ${({color}) => color};
`;

const Infos = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const InfoColor = styled.div `

    div{
        margin: 0 auto;
        height: 25px;
        width: 25px;
        left: 78px;
        top: 377px;
        border-radius: 17px;  
        border: 1px solid ${({borderColor}) => borderColor};
        background-color: ${({backgroundColor}) => backgroundColor};  
    }

    p {
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`;

const ClientInfo = styled.div`
    font-family: Roboto;
    font-size: 18px;
    line-height: 21px;
    margin: 40px 0 58px 24px;
    p{
        color: #293845;
        margin-top: 7px;
    }

    input{
        height: 51px;
        width: 327px;
        font-size: 18px;
        border-radius: 3px;    
        font-style: italic;
        padding-left: 15px;
        border: 1px solid #D4D4D4;
    }
`;

export {
    SeatsSession,
    SeatSession,
    Infos,
    InfoColor,
    ClientInfo
}