import { Container, Description, ConfirmButton } from "../Shared/style";
import { Informations } from "./style";
export default function Sucess({seatSelecteds, setSeatSelecteds, clientInfo, setClientInfo}) {
    console.log("tela final")
    console.log("iinfo client: ", clientInfo)
    console.log("Assentos: ", seatSelecteds)
    
    return(
        <Container>
            <Description color="#247A6B" weigth="700">
                <p>Pedido feito</p>
                <p>com sucesso!</p>
            </Description>

            <Informations>
                <h6>Filme e sessão</h6>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </Informations>
        
            <Informations>
                <h6>Ingressos</h6>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </Informations>

            <Informations>
                <h6>Comprador</h6>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </Informations>

            <ConfirmButton>
              <button>Voltar pra Home</button>
            </ConfirmButton>
        </Container>
    );
}