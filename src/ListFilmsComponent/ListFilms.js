import film from "../film.png"
function ListFilms() {

    return (
        <div className="container">
            <div className="description">
                <span>Selecione o filme</span>
            </div>
            <div className="films">
                <div className="film">
                    <img src={film}/>
                </div>
                <div className="film">
                    <img src={film}/>
                </div>
                <div className="film">
                    <img src={film}/>
                </div>
                <div className="film">
                    <img src={film}/>
                </div>
                <div className="film">
                    <img src={film}/>
                </div>
                <div className="film">
                    <img src={film}/>
                </div>
            </div>
        </div>
    );
}

export default ListFilms;