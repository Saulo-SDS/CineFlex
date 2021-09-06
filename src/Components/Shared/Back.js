import styled from "styled-components";

export default function Back({history}) {

    return (
     <BackPage>
        <button  onClick={() => { history.goBack()}}>
            <ion-icon name="arrow-back-sharp"></ion-icon>
        </button>
     </BackPage>
    );
}

const BackPage = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 50px;
        margin-left: 5px;
        margin-top: 19px;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
        border: none;
        border-radius: 3px;
        color: #ffffff;
        background-color: #E8833A;
    }
`;