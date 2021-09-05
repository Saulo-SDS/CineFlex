import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ConfirmButton, Container, Description } from "../Shared/style";
import { SeatsSession } from "./style.js";
import { URL_SERVER } from "../Shared/Api";
import axios from 'axios';
import Seat from './Seat';
import SeatInfos from './SeatInfos';
import BottomBar from './BottomBar';
import InfoClient from './InfoClient';


export default function Seats({seatSelecteds, setSeatSelecteds, clientInfo, setClientInfo}) {
    
    const [seats, setSeats] = useState(null);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
	const { idSession } = useParams();
    let validData = isValide(name, cpf);

    useEffect (() => {
        const request = axios.get(`${URL_SERVER}showtimes/${idSession}/seats`)
        request.then(resp => {
            setSeats(resp.data);
        });
    }, []);
    
    console.log("Selecionados: ", seatSelecteds);


    function saveData() {
        setClientInfo({name, cpf});
        console.log("funcionando")
    }
    
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
            
            <SeatInfos/>

            <InfoClient 
                name={name}
                cpf={cpf}
                setName={setName}
                setCpf={setCpf}
            />

            <ConfirmButton pointer={validData ? "visible" : "none"} onClick={saveData}>
                <Link to="/Sucess">
                        <button>Reservar assento(s)</button>
                </Link>
            </ConfirmButton>
           
            {seats ?
                <BottomBar 
                    seats={seats} 
                    title={seats.movie.title} 
                    name={seats.name} 
                    image={seats.movie.posterURL}
                    weekday={seats.day.weekday} 
                />
                :
                ""
            }
        </Container>
    );
}   

function isValide(name, cpf) {

    return name.length > 0 && cpf.length === 11;
}
