import film from "../film.png"
import { Container, Description } from "../Shared/style";
import { Films } from "./style";

export default function ListFilms() {

    return (
        <Container>
            <Description>
                <p>Selecione o filme</p>
            </Description>
            <Films>
                <div>
                    <img src={film}/>
                </div>
                <div>
                    <img src={film}/>
                </div>
                <div>
                    <img src={film}/>
                </div>
                <div>
                    <img src={film}/>
                </div>
                <div>
                    <img src={film}/>
                </div>
                <div>
                    <img src={film}/>
                </div>
            </Films>
        </Container>
    );
}