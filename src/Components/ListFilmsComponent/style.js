import styled from 'styled-components';

const Films = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 209px;
        width: 145px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        margin-bottom: 25px;
    }

    img {
        height: 193px;
        width: 129px;
    }
`;

export {
    Films
}