import styled from '@emotion/styled/macro'

export default styled.div`
    width: 100%;
    height: 100%;
    
    padding: 20px 10px;
    background-color: ${props => props.theme.palette.background.paper};

    @media (min-width: 485px) {
        border-radius: 16px;
        max-width: 485px;
        max-height: 600px;
        padding: 10px;
        /* margin: 5% auto; */
    }
`;