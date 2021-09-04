function FinalScreen() {

    return(
        <div className="container">
            <div className="title">
                <p>Pedido feito</p>
                <p>com sucesso!</p>
            </div>

            <div className="description">
                <h6>Filme e sessão</h6>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </div>
        
            <div className="description">
                <h6>Ingressos</h6>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </div>

            <div className="description">
                <h6>Comprador</h6>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </div>


            <button>Voltar pra Home</button>


        </div>
    );
}

export default FinalScreen;