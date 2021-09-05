import { InfoColor, Infos } from "./style";

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