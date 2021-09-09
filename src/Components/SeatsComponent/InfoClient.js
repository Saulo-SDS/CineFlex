import styled from "styled-components";

export default function InfoClient({name, cpf, setName, setCpf}) {

    return (
        <ClientInfo>
            <p>Nome do comprador:</p>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Digite seu nome..."/>
            <p>CPF do comprador:</p>
            <input value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF..."/>
        </ClientInfo>
    );
}

const ClientInfo = styled.div`
    font-family: Roboto;
    font-size: 18px;
    line-height: 21px;
    margin: 40px 0 58px 24px;
    p{
        color: #293845;
        margin-top: 7px;
    }
    input{
        height: 51px;
        width: 327px;
        font-size: 18px;
        border-radius: 3px;    
        font-style: italic;
        padding-left: 15px;
        border: 1px solid #D4D4D4;
    }
`;