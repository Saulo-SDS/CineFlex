import { useState } from "react";
import { SeatSession } from "./style.js";

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