import React from "react";

import { 
    Container, 
    Header, 
    Main,
    Svg, 
    Logo, 
    SliderEl 
} from './Home.style';
import Wrapper from "../../components/Wrapper";
import Button from '../../components/Button'
import SimpleSlider from '../../components/SimpleSlider'

function Home(props) {

    return (
        <Wrapper>
            <Container>
                <Header>
                    <Logo>
                        <Svg src="logo.svg"/>
                        <span>UpTodo</span>
                    </Logo>
                    <Button>LOGIN</Button>
                    
                </Header>
                <Main>
                    <SimpleSlider>
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
                    </SimpleSlider>
                </Main>
            </Container>
        </Wrapper>
    );
} 

export default Home