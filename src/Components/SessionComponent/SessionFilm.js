import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Description, BackImage, BottomBar} from "../Shared/style";
import { InfoSession, Button } from "./style"
import { URL_SERVER } from '../Shared/Api';
import axios from 'axios';


export default function SessionFilm() {

    const[sessions, setSessions] = useState(null);
	const { idFilm } = useParams();

    useEffect (() => {
        const request = axios.get(`${URL_SERVER}movies/${idFilm}/showtimes`)
        request.then(resp => {
            setSessions(resp.data);
        });
    }, []);

    return (
        <Container>
            <Description>
                <p>Selecione o horário</p>
            </Description>
            
            {sessions === null ? "" : sessions.days.map(({weekday, date, showtimes, id}) => (
                <InfoSession key={id}>
                    <p>{weekday} - {date}</p>
                    {showtimes.map(({name, id}) => (
                        <Button key={id}>{name}</Button>
                    ))}
                </InfoSession>                                    
            ))}
            
            <BottomBar>
                    <BackImage>
                     <img src={sessions === null ? "" : sessions.posterURL}/>
                    </BackImage>
                    <div>
                      <p>{sessions === null ? "" : sessions.title}</p>
                    </div>                    
            </BottomBar>
        </Container>
    );
}