import React from "react";

import { 
  Typography,
  Container,
  Link
} from '@mui/material';

function Home() {
  return (
    <Container maxWidth="sm" sx={{mt:1}}>
      <Typography variant="h5" sx= {{mt:1}}>React ToDo</Typography>
      <Typography variant="body1">Simple Todo with authentication and task planning.</Typography>
      <Typography variant="h5" sx= {{mt:1}}>API</Typography>
      <Link href="http://nestjs-boilerplate-test.herokuapp.com/docs/" target="_blank" variant="body1">Authentication</Link>
      <Typography variant="body1">Task saving: localStorage.</Typography>
      <Typography variant="h5" sx= {{mt:1}}>Ecosystem</Typography>
      <Typography variant="body1" sx={{display:"inline"}}>Styles:</Typography>
      <Link href="https://mui.com/" target="_blank" variant="body1"> Material UI</Link>
      <br/>
      <Typography variant="body1" sx={{display:"inline"}}>Routing:</Typography>
      <Link href="https://v5.reactrouter.com/web/guides/quick-start" target="_blank" variant="body1"> React Router</Link>
      <br/>
      <Typography variant="body1" sx={{display:"inline"}}>State management:</Typography>
      <Link href="https://medium.com/octopus-labs-london/replacing-redux-with-react-hooks-and-context-part-1-11b72ffdb533" target="_blank" variant="body1"> React Hooks and Context</Link>
      <br/>
      <Typography variant="body1" sx={{display:"inline"}}>Form validation:</Typography>
      <Link href="https://react-hook-form.com/" target="_blank" variant="body1"> React Hook Forms </Link>
      <Typography variant="body1" sx={{display:"inline"}}>&</Typography>
      <Link href="https://www.npmjs.com/package/yup" target="_blank" variant="body1"> yup</Link>

    </Container>
  );
} 

export default Home