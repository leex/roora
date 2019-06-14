import React, { Component } from "react";

import Welcome from "../welcome";

import About from '../about';

import News from '../news';

import Participate from '../participate';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import './app.css';

import Logo from '../../assets/cannabis_logo.png';

class App extends Component {
  componentDidMount() { }

  render() {
    return (
      <Router>
        <section id="page">
          <Navbar
            fixed="bottom"
            bg="light"
            variant="light"
            className="p-0"
            role="navigation"
          >
            <ButtonGroup
              size=""
              className="row m-0"
              style={{ width: "100%" }}
            >
              <Button href="/" variant="primary" className="rounded-0 col-6">
                Home
                </Button>
              <Button
                href="/about/"
                variant="danger"
                className="rounded-0 col-6"
              >
                About
                </Button>
              <Button
                href="/participate/"
                variant="warning"
                className="rounded-0 col-6"
              >
                Participate
                </Button>
              <Button
                href="/news/"
                variant="success"
                className="rounded-0 col-6"
              >
                NEWS
                </Button>
            </ButtonGroup>
          </Navbar>
          <div id="header" className="pb-2">
            <div className="logo"><img src={Logo} alt="logo" className="" style={{ width: '50px', height: 'auto' }} /></div>
            <div className="col"><h1>Rō&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ora</h1></div>
            <div className="">Talking cannabis in Aotearoa</div>
          </div>
          <div id="content" className="p-3">
            <Route path="/" exact component={Welcome} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
            <Route path="/participate" component={Participate} />
          </div>
        </section>
      </Router >
    );
  }
}

export default App;
