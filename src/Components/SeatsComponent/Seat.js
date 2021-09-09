import styled from "styled-components";
import { useState } from "react";

export default function Seat({name, id, isAvailable, seatSelecteds, setSeatSelecteds, numbers, setNumbers}) {
    
    const [selected, setSelected] = useState(false);
    function chosenSeat(id){

       if(selected) {
            let modify = seatSelecteds.filter(select => select !== id);
            let modifyNumbers = numbers.filter(number => number !== name);
            setSeatSelecteds([...modify]);
            setNumbers([...modifyNumbers]);
            setSelected(false);
       }else{
            setNumbers([...numbers, name]);
            setSeatSelecteds([...seatSelecteds, id]);
            setSelected(true)
       }
    }

    function err(){
        alert("Esse assento não está disponível")
    }

    return (
        <SeatSession
            key={id} 
            color={!isAvailable ? "#FBE192" : (selected ? "#8DD7CF" : "#C3CFD9")}
            onClick={isAvailable ? () => chosenSeat(id) : err}
            >
            {name}
        </SeatSession>
    );
}

const SeatSession = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 26px;
    width: 26px;
    margin: 0 7px 18px 0;
    border-radius: 12px;
    background-color: ${({color}) => color};
`;
