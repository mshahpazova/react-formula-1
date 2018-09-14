import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './js/store/index'
import routes from './router/routes'
import ReactDOM from 'react-dom';

import DriversListComponent from '../src/js/components/drivers-list.component'

ReactDOM.render(
<App/>,
document.getElementById('root')
);
registerServiceWorker();
