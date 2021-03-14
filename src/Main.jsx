import './styles/Main.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './store';

import CardList from './components/CardList';
import CardInfo from './components/CardInfo';

export default (props) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <CardList />
                </Route>
                <Route path="/card-info/:code">
                    <CardInfo />
                </Route>
            </Switch>
        </Router>
    </Provider>
);