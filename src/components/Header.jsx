import styled from '@emotion/styled/macro'
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { Typography } from '@mui/material';


const Header_ = styled.div`
    display: flex;
    align-items: center;
    

    box-sizing: border-box;
    width: 100%;
    
    height: 60px;
    padding: 0 10px;

    a {
        margin-left: auto;
    }
`;

export default ({children}) => {
    return (
    <Header_>
        <FactCheckIcon color="primary" sx={{ fontSize: 48 }}/>
        <Typography variant="h4" color="primary">ToDo</Typography>;
        {children}
    </Header_>
    );
}