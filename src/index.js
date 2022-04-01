import React                                                from 'react';
import ReactDOM                                             from 'react-dom';
import {Provider}                                           from 'react-redux';
import {createStore, applyMiddleware}                       from "redux";

import {composeWithDevTools}                                from 'redux-devtools-extension';
import thunk                                                from 'redux-thunk';
import { Router, Route }                                    from 'react-router'
import { createBrowserHistory }                             from 'history';
import { syncHistoryWithStore }                             from 'react-router-redux';

import App                                                  from './App';
import Login                                                from './Login';
import GlobalStyle                                          from './GlobalStyle';

import reducer                                              from "./reducers";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(createBrowserHistory() , store);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle/>
            <Router history={history}>
                <Route path="/" component={App}/>
                <Route path="/login" component={Login}/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

