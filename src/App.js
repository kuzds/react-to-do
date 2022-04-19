import React from 'react';

import AppRoutes from './routes/Routes';
import Header from './components/Header';

import ThemeModeProvider from './providers/ThemeModeProvider';
import TaskerProvider from './providers/TaskerProvider';

function App(){
    return (
    <ThemeModeProvider>
      <TaskerProvider>
        <Header/>
        <AppRoutes />
      </TaskerProvider>
    </ThemeModeProvider>
    );
}

export default App;
