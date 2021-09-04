import { Container, Description, BackImage, BottomBar} from "../Shared/style";
import { InfoSession, Button } from "./style"
import film from "../film.png"

export default function SessionFilm() {

    return (
        <Container>
            <Description>
                <p>Selecione o horário</p>
            </Description>
            <InfoSession>
                <p>Quinta-feira - 24/06/2021</p>
                <div>
                    <Button>15:00</Button>
                    <Button>19:00</Button>
                </div>
            </InfoSession>
            <InfoSession>
                <p>Sexta-feira - 25/06/2021</p>
                <div>
                    <Button>15:00</Button>
                    <Button>19:00</Button>
                </div>
            </InfoSession>

            <BottomBar>
                    <BackImage>
                     <img src={film}/>
                    </BackImage>
                    <div>
                      <p>Enola Holmes</p>
                    </div>                    
            </BottomBar>
        </Container>
    );
}