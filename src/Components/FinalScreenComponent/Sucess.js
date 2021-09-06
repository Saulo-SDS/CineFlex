import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { Container, Description, ConfirmButton, BackPage } from "../Shared/style";
import Back from "../Shared/Back";
export default function Sucess({seatSelecteds, setSeatSelecteds, purchaseInfo, setPurchaseInfo}) {
    const history = useHistory();
    function resetDatas(setSeatSelecteds, setPurchaseInfo) {
        setSeatSelecteds([]);
        setPurchaseInfo(null);
    }

    return(
        <Container>
            <Back history={history}/>
            <Description color="#247A6B" weigth="700">
                <p>Pedido feito</p>
                <p>com sucesso!</p>
            </Description>

            <Informations>
                <h6>Filme e sessão</h6>
                <p>{purchaseInfo.title}</p>
                <p>{purchaseInfo.date} {purchaseInfo.hour}</p>
            </Informations>
        
            <Informations>
                <h6>Ingressos</h6>
                {purchaseInfo.numbers.map((num, index ) => <p key={index}>Assento {num}</p>)}
            </Informations>

            <Informations>
                <h6>Comprador</h6>
                <p>Nome: {purchaseInfo.name}</p>
                <p>CPF: {cpfTrans(purchaseInfo.cpf)}</p>
            </Informations>

            <Link to="/">
                <ConfirmButton onClick={() => resetDatas(setSeatSelecteds, setPurchaseInfo)}>
                <button>Voltar pra Home</button>
                </ConfirmButton>
            </Link>
            
        </Container>
    );
}

function cpfTrans(cpf){
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

const Informations = styled.div`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.04em;
    padding-left: 28px;
    margin-bottom: 30px;
    color: #293845;
    h6 {
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        margin-bottom: 7px;
    }
    p {
        font-size: 22px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0.04em;
    }
`;