import React from 'react';
import DriversListComponent from '../js/components/drivers-list.component';
import App from '../../src/App'
import {
    HashRouter,
    Route
} from 'react-router-dom';

export default (
  <HashRouter path="/" component={App}>
    <Route exact path="/drivers" component={DriversListComponent}/>
  </HashRouter>
);