import React from 'react';
import {Normalize} from 'styled-normalize';
import './App.css';
import HistoryPage from '../../pages/HistoryPage';
import StartPage from '../../pages/StartPage';
import SettingsPage from '../../pages/SettingsPage';
import {connect} from 'react-redux';
import {Route, Switch} from "react-router-dom"


const App = ({ history, commits}) => {
    return (
        <div className = 'App'>          
            <Normalize/>
            <Switch>
                <Route history={history} path='/settings' component = {SettingsPage}/>
                <Route path="/">
                    {commits.length ? <HistoryPage/> : <StartPage/>}
                </Route>                
            </Switch> 
        </div>     
    )
}

const mapStateToProps = ({commits}) => {
    return {commits};
}

export default connect(mapStateToProps)(App);



