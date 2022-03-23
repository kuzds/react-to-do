import { useDispatch }                  from 'react-redux';
import styled                           from 'styled-components';

export const DialogErrorStyled = styled.div`
    display: -ms-grid;
    display: grid;
    grid-gap: 0.5rem;

    min-width: 25rem;
    background-color: #fff;

    h3 {
        color: #c70556;
    }

    span {
        margin: 0 0.5rem;
    }
`;


export default function DialogError(props){
    const dispatch = useDispatch();

    function handleClickErrorOff(){
        dispatch({type:"CLOSE_ERROR"});
    }
    return(
        <DialogErrorStyled>
            <h3>Возникла ошибка!</h3>
            <span>{props.title}</span>
            <span>{props.reason}</span>
            <button onClick={handleClickErrorOff}>Закрыть</button>
        </DialogErrorStyled>
    );
}