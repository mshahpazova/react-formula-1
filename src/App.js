import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import TeamsList from '../src/js/components/teams-list.component';
import DriversList from '../src/js/components/drivers-list.component';
import CircuitsList from '../src/js/components/circuits-list.component';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
      <p>Logo and Navigation</p>
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <div>
      <Navigation/>
      <BrowserRouter> 
        <Switch>
          <Route exact path="/" component={DriversList}/>
          <Route exact path="/teams" component={TeamsList}/>
          <Route exact path="/circuits" component={CircuitsList}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
