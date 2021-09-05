import { Link } from "react-router-dom";
import { Container, Description, ConfirmButton } from "../Shared/style";
import { Informations } from "./style";
export default function Sucess({seatSelecteds, setSeatSelecteds, clientInfo, setClientInfo}) {

    function resetDatas(setSeatSelecteds, setClientInfo) {
        setSeatSelecteds([]);
        setClientInfo(null);
    }

    return(
        <Container>
            <Description color="#247A6B" weigth="700">
                <p>Pedido feito</p>
                <p>com sucesso!</p>
            </Description>

            <Informations>
                <h6>Filme e sessão</h6>
                <p>{clientInfo.title}</p>
                <p>{clientInfo.date} {clientInfo.hour}</p>
            </Informations>
        
            <Informations>
                <h6>Ingressos</h6>
                {clientInfo.numbers.map((num, index ) => <p key={index}>Assento {num}</p>)}
            </Informations>

            <Informations>
                <h6>Comprador</h6>
                <p>Nome: {clientInfo.name}</p>
                <p>CPF: {cpfTrans(clientInfo.cpf)}</p>
            </Informations>

            <Link to="/">
                <ConfirmButton onClick={() => resetDatas(setSeatSelecteds, setClientInfo)}>
                <button>Voltar pra Home</button>
                </ConfirmButton>
            </Link>
            
        </Container>
    );
}

function cpfTrans(cpf){
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}
