import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';

export default class Trips extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/trips/create" component={Create} />
                <Route component={Main} />
            </Switch>
        );
    }
}