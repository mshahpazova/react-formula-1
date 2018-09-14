import React from "react";
import { connect } from "react-redux";
import driversApi from "../api/drivers.api.js"
import axios from 'axios';
export default class DriversList extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      drivers: []
    };
    this.getDrivers = this.getDrivers.bind(this);
  }
  render(){
    return (
      
      <ul className="list-group list-group-flush">
        {this.state.drivers.map(driver => (
          <li className="list-group-item">
            { driver }
          </li>
        ))}
      </ul>
    )
  }

  componentWillMount() {
    console.log(this.getDrivers());
  }
  
  getDrivers(){
     axios.get('http://ergast.com/api/f1/2018/driverStandings.json')
      //  .then(response => { debugger })       
       .then(response => { this.setState({drivers: response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(item => item.Driver).map(driver => driver.driverId) }) });
  }
}
