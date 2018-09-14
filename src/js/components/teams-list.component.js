import React from "react";
import { connect } from "react-redux";
import driversApi from "../api/drivers.api.js"
import axios from 'axios';
export default class TeamsList extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
    this.getTeams = this.getTeams.bind(this);
  }
  render(){
    return (
      
      <ul className="list-group list-group-flush">
        {this.state.teams.map(team => (
          <li className="list-group-item">
            { team }
          </li>
        ))}
      </ul>
    )
  }
  componentWillMount() {
    this.getTeams();
  }

  getTeams(){
    axios.get('http://ergast.com/api/f1/2018/constructors.json')
    .then(response => { this.setState({ teams: response.data.MRData.ConstructorTable.Constructors.map(item => item.name)}) }); 
  }
}
