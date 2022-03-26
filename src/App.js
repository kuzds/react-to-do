import React, { useState, useEffect }                       from 'react';
import { useSelector }                                      from 'react-redux';



import GlobalStyle                                          from './GlobalStyle';
import { ThemeProvider } from 'styled-components';

import { Wrapper, Container, Header, 
    Main, Svg, Logo, Button, SliderEl }                     from './App.style';
import SimpleSlider                                         from './components/SimpleSlider'

const theme = {
    firstColor: "hsl(248, 100%, 73%)",
    firstColorLight: "hsl(248, 100%, 68%)",
    bgColor: "#121212",
};


function App(props){

    return (<>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    </>);
}


export default App;
