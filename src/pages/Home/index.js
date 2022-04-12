import React from "react";

import { 
    Logo,
    Main,
    SliderEl 
} from './Home.style';
import Container from '../../components/Container';
import Header from '../../components/Header';

import Button from '@mui/material/Button';
import SimpleSlider from '../../components/SimpleSlider'

import { Link, useNavigate } from "react-router-dom";


function Home(props) {

    return (
        <Container>
            <Header>
                <Button variant="contained" component={Link} to="/login">LOGIN</Button>
                
            </Header>
            <Main>
                {/* <SimpleSlider>
                <SliderEl>
                    <Svg src="picture/intro1.svg"/>
                    <h2>Manage your tasks</h2>
                    <span>You can easily manage all of your daily tasks in DoMe for free</span>
                </SliderEl>
                <SliderEl>
                    <Svg src="picture/intro2.svg"/>
                    <h2>Create daily routine</h2>
                    <span>In Uptodo  you can create your personalized routine to stay productive </span>
                </SliderEl>
                <SliderEl>
                    <Svg src="picture/intro3.svg"/>
                    <h2>Orgonaize your tasks</h2>
                    <span>You can organize your daily tasks by adding your tasks into separate categories</span>
                </SliderEl>
                </SimpleSlider> */}
            </Main>
        </Container>
    );
} 

export default Home