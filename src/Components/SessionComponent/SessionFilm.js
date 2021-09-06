import styled from "styled-components";
import { useParams, useHistory, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Description} from "../Shared/style";
import { URL_SERVER } from '../Shared/Api';
import Loading from '../Shared/Loading';
import axios from 'axios';
import BottomBar from "./BottomBar";
import Back from "../Shared/Back";

export default function SessionFilm() {

    const[sessions, setSessions] = useState(null);
	const { idFilm } = useParams();
    const history = useHistory();

    useEffect (() => {
        const request = axios.get(`${URL_SERVER}movies/${idFilm}/showtimes`)
        request.then(resp => {
            setSessions(resp.data);
        });
    }, []);

    return (
        <Container>
            <Back history={history}/>
            {sessions ?
                <>
                    <Description>
                        <p>Selecione o horário</p>
                    </Description>
                    
                    {sessions.days.map(({weekday, date, showtimes, id}) => (
                        <InfoSession key={id}>
                            <p>{weekday} - {date}</p>
                            {showtimes.map(({name, id}) => (
                                <Link key={id} to={`/Seats/${id}`} onClick={() => history.push(`/Session/${idFilm}`)}>       
                                    <Button>{name}</Button>
                                </Link>
                            ))}
                        </InfoSession>                                    
                    ))}
                    <BottomBar
                        title={sessions.title}
                        image={sessions.posterURL}
                    />
                </>
                :
                <Loading/>
            }
        </Container>
    );
}

const InfoSession = styled.div`
    margin: 0 38px 20px 38px;
    p {
        font-family: roboto;
        font-size: 20px;
        font-style: normal;
        line-height: 23px;
        letter-spacing: 0.02em;
        color: #293845;
        margin-bottom: 20px;
    }
    div {
        margin-bottom: 30px;
    }
`;

const Button = styled.button`
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    height: 43px;
    width: 83px;
    border: none;
    border-radius: 3px;
    background-color: #E8833A;
    color: #ffffff;
    margin-right: 10px;
`;