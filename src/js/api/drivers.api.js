import client from "./client";
export default class DriversAPI {
  static getAllDrivers() {
			return `${client}driverStandings.json`;
  }
  
  static getTeams() {
    // return `${client}driverStandings.json`;
  }
}