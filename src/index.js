// Set up your application entry point here...
// ./src/index.js

// Babel polyfill will emulate a full
// ES2015 environemnt so we can enjoy goodies like
// Promises
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('app')
);