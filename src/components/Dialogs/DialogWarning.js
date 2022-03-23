import { useDispatch }                  from 'react-redux';
import styled                           from 'styled-components';

export const DialogWarningStyled = styled.div`
    display: -ms-grid;
    display: grid;
    grid-gap: 0.5rem;
    
    min-width: 25rem;
    background-color: #fff;

    h3 {
        color: #c4c705;
    }

    span {
        margin: 0 0.5rem;
    }
`;

export default function DialogWarning(props){
    const dispatch = useDispatch();

    function handleClickWarningOff(){
        dispatch("CLOSE_WARNING");
    }
    
    return(
        <DialogWarningStyled>
            <h3>Внимание!</h3>
            <span>Некое сообщение!</span>
            <button onClick={handleClickWarningOff}>Закрыть</button>
        </DialogWarningStyled>
    );
}
