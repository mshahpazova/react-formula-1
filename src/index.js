import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import Router from 'react-router';
import store from './js/store/index'
import routes from './router/routes'
ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>,
document.getElementById('root')
);
registerServiceWorker();
