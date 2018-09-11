import client from "./client";
export default class DriversAPI {
  static getAllDrivers() {
			return `${client}driverStandings.json`;
	}
}