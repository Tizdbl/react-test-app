import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Display from './Display';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/display" component={Display} />
            </Switch>
        </Router>
    );
}

export default Routes;
