import { ClientInfo } from "./style";

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