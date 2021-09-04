import film from "../film.png"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_SERVER } from "../Shared/Api";

import { Container, Description } from "../Shared/style";
import { Films } from "./style";

export default function ListFilms() {

    return (
        <Container>
            <Description>
                <p>Selecione o filme</p>
            </Description>
            <Films>

                <li>
                    <img src={film}/>
                </li>
                <li>
                    <img src={film}/>
                </li>
            </Films>
        </Container>
    );
}