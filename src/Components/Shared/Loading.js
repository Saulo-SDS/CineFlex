import styled from 'styled-components';
import loading from "./loading.png";

export default function Loading() {

    return (
        <Load>
            <div>
                <img src={loading} alt=""/>  
                <p>Carrengando...</p>
            </div>     
        </Load>    
    );
}

const Load = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img {   
        width: 150px;
        height: 150px;
        margin: 70px 0 20px 0;
        -webkit-animation:spin 4s linear infinite;
        -moz-animation:spin 4s linear infinite;
        animation:spin 4s linear infinite;
    }
    p {
        font-size: 18px;
        line-height: 21px;
        margin-left: 30px;
    }
`;