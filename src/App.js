import React from 'react';

import AppRoutes from './routes/Routes';
import Header from './components/Header';

import ThemeModeProvider from './providers/ThemeModeProvider';

function App(){
    return (
    <ThemeModeProvider>
        <Header/>
        <AppRoutes />
    </ThemeModeProvider>
    );
}

export default App;
