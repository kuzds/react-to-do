import React from "react";


import { 
    Button,
    Typography, 
    Grid, 
    TextField,
    Container
} from '@mui/material';

import Header from '../../components/Header';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Link, useNavigate } from "react-router-dom";


function Home(props) {

    return (
        <div>
            <Header>
                <Button variant="contained" component={Link} to="/login">LOGIN</Button>
            </Header>
            <Container maxWidth="md">
                <LoremIpsum p={2} />
            </Container>
        </div>
    );
} 

export default Home