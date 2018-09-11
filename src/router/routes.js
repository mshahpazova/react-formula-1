import React from 'react';
import DriversListComponent from '../js/components/drivers-list.component';
import {Route, IndexRoute} from 'react-router';
import App from '../../src/App'
export default (
  // <IndexRoute component={WelcomePageContainer}/> 
  <Route path="/" component={App}>
    {/* <IndexRoute component={DriversListComponent}/> */}
  </Route>
);
