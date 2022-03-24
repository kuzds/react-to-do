import React, { useState, useEffect }                       from 'react';
import { useSelector }                                      from 'react-redux';



import GlobalStyle                                          from './GlobalStyle';
import { ThemeProvider } from 'styled-components';

import { Wrapper, Header, Main, SvgContainer, Button }      from './App.style';
import SimpleSlider                                         from './components/SimpleSlider'

const theme = {
    firstColor: "#8875FF",
    bgColor: "#121212",
};


function App(props){

    return (<>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Header>
                    <SvgContainer>
                        <img src="logo.svg" alt="Logo SVG" /><span>UpTodo</span>
                    </SvgContainer>
                    <Button>LOGIN</Button>
                </Header>
                <Main>
                    <SimpleSlider/>
                </Main>
            </Wrapper>
        </ThemeProvider>
    </>);
}


export default App;
