import { useParams, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Description, BackImage, Footer} from "../Shared/style";
import { InfoSession, Button } from "./style"
import { URL_SERVER } from '../Shared/Api';
import axios from 'axios';
import Loading from '../Shared/Loading';

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
            {sessions ?
                <>
                    <Description>
                        <p>Selecione o horário</p>
                    </Description>
                    
                    {sessions.days.map(({weekday, date, showtimes, id}) => (
                        <InfoSession key={id}>
                            <p>{weekday} - {date}</p>
                            {showtimes.map(({name, id}) => (
                                <Link key={id} to={`/Seats/${id}`}>       
                                    <Button>{name}</Button>
                                </Link>
                            ))}
                        </InfoSession>                                    
                    ))}
                    
                    <Footer>
                        <BackImage>
                            <img src={sessions.posterURL}/>
                        </BackImage>
                        <div>
                            <p>{sessions.title}</p>
                        </div>                    
                    </Footer>
                </>
                :
                <Loading/>
            }
        </Container>
    );
}