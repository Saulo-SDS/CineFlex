import styled from "styled-components";

export default function SeatInfos() {

    return (
        <Infos>
            <InfoColor borderColor="#1AAE9E" backgroundColor="#8DD7CF">
                <div></div>
                <p>Selecionado</p>
            </InfoColor>
            <InfoColor borderColor="#7B8B99" backgroundColor="#C3CFD9">
                <div></div>
                <p>Disponível</p>
            </InfoColor>
            <InfoColor borderColor="#F7C52B" backgroundColor="#FBE192">
                <div></div>
                <p>Indisponível</p>
            </InfoColor>
        </Infos>
    );
}

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
