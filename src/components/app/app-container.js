import React, { Component } from 'react';

import Welcome from '../welcome';

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

  componentDidMount() {
  }

  index = () => {
    return <div>
      <h2 className="">Index Page Content</h2>
    </div>;
  }

  render() {
    return (
      <Router>
        <section id="">
          <div id="header">
            HEADER
          </div>
          <div id="content">
             All CONTENT
            <Route path="/" exact component={Welcome} />
          </div>
        </section>
      </Router>
    )
  }

}

export default App;
