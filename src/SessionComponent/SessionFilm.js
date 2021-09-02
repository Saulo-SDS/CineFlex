import film from "../film.png"
function SessionFilm() {

    return (
        <div className="container">
            <div className="description">
                <span>Selecione o horário</span>
            </div>
            <div className="info-film">
                <span className="day">Quinta-feira - 24/06/2021</span>
                <div className="buttons">
                    <button>15:00</button>
                    <button>19:00</button>
                </div>
            </div>
            <div className="info-film">
                <span className="day">Sexta-feira - 25/06/2021</span>
                <div className="buttons">
                    <button>15:00</button>
                    <button>19:00</button>
                </div>
            </div>

            <div className="bottom-bar">
                <div className="chosen-film">
                    <div>
                     <img src={film}/>
                    </div>
                    <span>Enola Holmes</span>
                </div>
            </div>
        </div>
    );
}

export default SessionFilm;