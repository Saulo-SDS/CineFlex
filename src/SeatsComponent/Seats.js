import film from "../film.png"

function Seats() {
    const data = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20",
                    "21","22","23","24","25","26","27","28","29","30",
                    "31","32","33","34","35","36","37","38","39","40",
                    "41","42","43","44","45","46","47","48","49","50"
    ];


    return (
        <div className="container">

            <div className="description">
                <span>Selecione o(s) assento(s)</span>
            </div>

            <ul className="seats-session">
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>10</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>20</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>30</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>40</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>50</li>
            </ul>

            <div className="infos">
                <div className="infor-color">
                    <div className="selected"></div>
                    <span>Selecionado</span>
                </div>
                <div className="infor-color">
                    <div className="avaliable"></div>
                    <span>Disponível</span>
                </div>

                <div className="infor-color">
                    <div className="unavailable"></div>
                    <span>Indisponível</span>
                </div>
            </div>


            <div className="client-info">
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..."/>
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..."/>
            </div>


            <button>Reservar assento(s)</button>

            <div className="bottom-bar">
                <div className="chosen-film">
                    <div className="back-image">
                     <img src={film}/>
                    </div>
                    <div className="info-session">
                        <p>Enola Holmes</p>
                        <p>Quinta-fepira - 15:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}   


export default Seats;