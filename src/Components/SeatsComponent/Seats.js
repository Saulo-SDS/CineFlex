import { BackImage, BottomBar, ConfirmButton, Container, Description } from "../Shared/style";
import { ClientInfo, InfoColor, SeatsInfos, SeatsSession } from "./style.js";
import film from "../film.png"

export default function Seats() {
    const data = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20",
                    "21","22","23","24","25","26","27","28","29","30",
                    "31","32","33","34","35","36","37","38","39","40",
                    "41","42","43","44","45","46","47","48","49","50"
    ];


    return (
        <Container>
            <Description>
                <p>Selecione o(s) assento(s)</p>
            </Description>
            <SeatsSession>
                {data.map((i) => <li>{i}</li>)}
            </SeatsSession>

            <SeatsInfos>
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
            </SeatsInfos>

            <ClientInfo>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..."/>
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..."/>
            </ClientInfo>

            <ConfirmButton>
                <button>Reservar assento(s)</button>
            </ConfirmButton>

            <BottomBar>
               <BackImage>
                    <img src={film}/>
                </BackImage>
                <div>
                    <p>Enola Holmes</p>
                    <p>Quinta-feira - 15:00</p>
                </div>       
            </BottomBar>
        </Container>
    );
}   
