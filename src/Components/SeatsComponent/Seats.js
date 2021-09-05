import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BackImage, BottomBar, ConfirmButton, Container, Description } from "../Shared/style";
import { ClientInfo, InfoColor, SeatsInfos, SeatsSession } from "./style.js";
import { URL_SERVER } from "../Shared/Api";
import axios from 'axios';
import Seat from './Seat';


export default function Seats({seatSelecteds, setSeatSelecteds}) {

    const [seats, setSeats] = useState(null);
	const { idSession } = useParams();

    useEffect (() => {
        const request = axios.get(`${URL_SERVER}showtimes/${idSession}/seats`)
        request.then(resp => {
            setSeats(resp.data);
        });
    }, []);
    
    console.log("Selecionados: ", seatSelecteds)

    return (
        <Container>
            <Description>
                <p>Selecione o(s) assento(s)</p>
            </Description>

            <SeatsSession>
                {seats === null ? "": seats.seats.map(({name, id, isAvailable}) =>(
                    <Seat 
                        key={id}
                        name={name}
                        id={id}
                        isAvailable={isAvailable}
                        seatSelecteds={seatSelecteds}
                        setSeatSelecteds={setSeatSelecteds}
                    /> 
                ))}
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
                    <img src={seats === null ? "" : seats.movie.posterURL} alt=""/>
                </BackImage>
                <div>
                    <p>{seats === null ? "" : seats.movie.title}</p>
                    <p>{seats === null ? "" : `${seats.day.weekday} - ${seats.name}`}</p>                 
                </div>       
            </BottomBar>
        </Container>
    );
}   
