import axios from 'axios';
var axiosInstance = axios.create({
  baseURL: 'http://ergast.com/api/f1/2018/',
});

export default axiosInstance;