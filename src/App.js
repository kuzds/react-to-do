import React, { useState, useEffect }                       from 'react';
import { useSelector }                                      from 'react-redux';

import GlobalStyle                                          from './GlobalStyle';
import { ThemeProvider } from 'styled-components';

import { Content, Nav, Main, SvgContainer, Button } from './App.style';

const theme = {
    firstColor: "#8875FF",
    bgColor: "#121212",
};


function App(props){

    return (<>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <Content>
                <Nav>
                    <SvgContainer>
                        <img src="logo.svg" alt="Logo SVG" /><span>UpTodo</span>
                    </SvgContainer>
                    <Button>LOGIN</Button>
                </Nav>
                <Main>
                    TEXTTEXTTEXT
                </Main>
            </Content>
        </ThemeProvider>
    </>);
}


export default App;
