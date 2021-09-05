import { useState, useEffect } from 'react';
import { URL_SERVER } from "../Shared/Api";
import { Container, Description } from "../Shared/style";
import { Films } from "./style";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Film from './Film';

export default function ListFilms() {
    const [films, setFilms] = useState([]);

    useEffect (() => {
        const request = axios.get(`${URL_SERVER}movies`)
        request.then(resp => {
            setFilms(resp.data);
        });
    }, []);

    return (
        <Container>
            <Description>
                <p>Selecione o filme</p>
            </Description>
            <Films>
               {films.map(({id, posterURL}) => (
                  <Link key={id} to={`/Session/${id}`}>
                      <Film image={posterURL}/>
                  </Link>
                ))}
            </Films>
        </Container>
    );
}