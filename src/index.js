import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './index.css';
import App from './App';
import store from './Store/index';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));