import { ThemeProvider }                                    from 'styled-components';
import {Link} from "react-router-dom"

function App(props){

    return (<>
        <Link to="/">To Home</Link> 
        {/* <ThemeProvider theme={theme}>
            
        </ThemeProvider> */}
    </>);
}


export default App;
