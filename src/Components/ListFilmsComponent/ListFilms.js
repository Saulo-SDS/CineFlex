
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Container, Description } from "../Shared/style";
import { URL_SERVER } from "../Shared/Api";
import Loading from '../Shared/Loading';
import axios from 'axios';
import Film from './Film';

export default function ListFilms() {
    const [films, setFilms] = useState(null);
    const history = useHistory();

    useEffect (() => {
        const request = axios.get(`${URL_SERVER}movies`)
        request.then(resp => {
            setFilms(resp.data);
        });
    }, []);

    return (
        <Container>
            {films ? 
                <>
                    <Description>
                        <p>Selecione o filme</p>
                    </Description>
                    <Films>
                        {films.map(({id, posterURL}) => (
                            <Link key={id} to={`/Session/${id}`} onClick={() => history.push("/")}>
                                <Film image={posterURL}/>
                            </Link>
                        ))}
                    </Films>  
                </>
                :
                <Loading/>
            }
        </Container>
    );
}

const Films = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 209px;
        width: 145px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        margin-bottom: 25px;
    }
    img {
        height: 193px;
        width: 129px;
    }
`;