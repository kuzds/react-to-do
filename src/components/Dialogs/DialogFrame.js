import styled                           from 'styled-components';

export const DialogOverlay = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

export const DialogContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 15rem;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
`;

export default function DialogFrame(props){
    return(
        <div>
            <DialogOverlay style={{ zIndex: props.zIndex }}></DialogOverlay>
            <DialogContainer style={{ zIndex: props.zIndex+1 }}>{props.children}</DialogContainer>
        </div>
    );
}