import React, { Component } from "react";

import AuthHelperMethods from '../../helpers/auth/AuthHelperMethods';

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

import axios from "axios";

export default class About extends Component {
  Auth = new AuthHelperMethods();
  token = this.Auth.getToken();

  invitePerson = () => {
    console.log('invite user');

    axios.post(process.env.REACT_APP_ASYNC_PATH + '/invite', { headers: { "Authorization" : `Bearer ${this.token}` } })
    .then(function (response) {
      // handle success
      let userData = response.data.user;

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }

  componentDidMount() {
  }

  render() {

    return (
      <div>
        <h2>Invite a user</h2>

        <div className="">
            {/* <Form.Control onChange={this._handleChange} type="text" name="username" placeholder="invite code" /> */}
            <Form.Control onChange={this._handleChange} type="name" name="name" required placeholder="Persons Name" />
            <small>The persons name will be encrypted so that it is secret to everyone but you.</small>
            <Button className="form-submit" onClick={this.invitePerson}>Generate Invite Code</Button>
        </div>
      </div>
    );

  }

}
