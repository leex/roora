import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/app';

import Login from './components/login';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
      <div>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={App} />
          <Route exact path="/news" component={App} />
          <Route exact path="/participate" component={App} />
          <Route exact path="/login" component={Login} />
      </div>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
