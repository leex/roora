import React, { Component } from 'react';

import AuthHelperMethods from "../../helpers/auth/AuthHelperMethods";

import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

class Logout extends Component {
  Auth = new AuthHelperMethods();
  isLoggedIn = this.Auth.loggedIn();

  render() {
    if (this.isLoggedIn) {
      return (
        <div id="logout">
          <Link to="/" className="rounded-0 col-6">
            <Button onClick={this.Auth.logout}>Logout</Button>
          </Link>
        </div>
      )
    }

    return (
      <div id="logout">
      </div>
    )
  }

}

export default Logout;
