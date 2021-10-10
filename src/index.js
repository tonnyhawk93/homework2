import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import App from './components/App/App';
import BuildHistoryService from './services/BuildHistoryService';
import {BuildHistoryServiceProvider} from './components/buildHistoryServiceContext/buildHistoryServiceContext'

const buildHistoryService = new BuildHistoryService();

const history = createBrowserHistory()

ReactDOM.render((
    <BuildHistoryServiceProvider value = {buildHistoryService}>
        <Router history={history}>
            <App />
        </Router>                
    </BuildHistoryServiceProvider>
), document.getElementById('root'));



