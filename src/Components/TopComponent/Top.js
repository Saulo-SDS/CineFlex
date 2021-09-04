import styled from "styled-components";

export default function Top() {

    return (
        <Header>
            <span>CINEFLEX</span>
        </Header>
    );
}

const Header = styled.header`
    width: 100%;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    color: #E8833A;
    background-color: #C3CFD9;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
`;