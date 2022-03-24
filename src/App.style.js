import styled from 'styled-components';

// const first_color = "#8875FF";

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 10px;
    background-color: rgba(255,255,255,0.05);

    /* @media (max-width: 768px) {
        flex-direction: column;
    } */
`;


export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    
    background-color: ${props => props.theme.bgColor};

    @media (min-width: 768px) {
        max-width: 768px;
        margin: 0 auto;
    }
`;

export const Main = styled.div`
    /* display:flex; */
`;

export const SvgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 110px;
    height: 50px;
    img {
        width: 100%;
        height: 100%;
    }
    span {
        font-size: 20px;
    }
`;

export const Button = styled.button`
    background-color: ${props => props.theme.firstColor};
    border: none;
    border-radius: 4px;
    color: #FFF;
    padding: 11px 20px;

    font-size: 18px;
    font-weight: 00;
`;

