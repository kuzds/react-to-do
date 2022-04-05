import styled from '@emotion/styled/macro'

const Button = styled.button`
    background-color: ${props => props.theme.firstColor};
    border: none;
    border-radius: 4px;
    color: #FFF;
    padding: 11px 20px;
    user-select: none;
    font-size: 18px;
    font-weight: 00;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.firstColorLight};
    }
`;

export default Button;