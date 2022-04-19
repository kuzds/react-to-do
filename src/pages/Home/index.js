import React from "react";

import { 

    Container
} from '@mui/material';

import { LoremIpsum } from 'react-lorem-ipsum';
// import { Link, useNavigate } from "react-router-dom";


function Home() {

    return (
        <Container maxWidth="md">
            <LoremIpsum p={5} />
        </Container>
    );
} 

export default Home