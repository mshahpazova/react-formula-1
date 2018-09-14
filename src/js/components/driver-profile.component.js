import React from "react";
import driversApi from "../api/drivers.api.js"
import axios from 'axios';
export default class CircuitsList extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      circuits: []
    };
    this.getCircuits = this.getCircuits.bind(this);
  }
  render(){
    return (
      
      <ul className="list-group list-group-flush">
        {this.state.circuits.map(driver => (
          <li className="list-group-item">
            { driver }
          </li>
        ))}
      </ul>
    )
  }

  componentWillMount() {
    console.log(this.getCircuits());
  }
  
  getCircuits(){
     axios.get('http://ergast.com/api/f1/2018/circuits.json')
     .then(response => { debugger })       
     console.log(this.props.params)
    //  .then(response => { this.setState({circuits: response.data.MRData.CircuitTable["Circuits"].map(circuit => circuit.circuitName) }) });
  }
}
