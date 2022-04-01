import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    /* aspect-ratio: 900/600; */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url('./picture/waves1.svg');
`;



export const Container = styled.div`
    width: 100%;
    height: 100%;
    
    background-color: ${props => props.theme.bgColor};

    @media (min-width: 485px) {
        border-radius: 16px;
        max-width: 485px;
        max-height: 600px;
        /* margin: 5% auto; */
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 15px;
    padding-left: 10px;
    /* background-color: rgba(255,255,255,0.05); */

`;


export const Main = styled.div`
`;


const SvgStyle = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
    }
`;

export function Svg(props) {
    return (
        <SvgStyle>
            <img src={props.src} alt="svg"/>
        </SvgStyle>
    );
}

export const Logo = styled.div`
    display: flex;
    align-items: center;


    ${SvgStyle} {
        width: 30%;
    }
    span {
        font-size: 20px;
    }
`;




export const SliderEl = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    >* {
        padding: 10px;
    }

    ${SvgStyle} {
        height: 300px;
        padding-top:60px;
    }

    h2 {
        padding-top:40px;
    }
    span {
        padding:20px;
    }
`;
