import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/app';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router basename={process.env.REACT_APP_SUBDIR}>
      <div>
          <Route path="/" exact component={App} />
          <Route path="/about" component={App} />
          <Route path="/news" component={App} />
          <Route path="/participate" component={App} />
          <Route path="/login" component={App} />
          <Route path="/invite" component={App} />
      </div>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
