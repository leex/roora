import React, { Component } from 'react';

import ParticipationForm from '../participation-form';
import AuthenticationForm from '../authentication-form';
import Logout from '../logout';

import AuthHelperMethods from "../../helpers/auth/AuthHelperMethods";
import useStore from "../../helpers/store.js";

function UserInformation(props) {
  const userDetails = useStore();

  return <div>
    <div><p>You are logged in.</p></div>
    <div>Name: {userDetails.name || 'Unknown'}</div>
    <div>Region: {userDetails.region || 'Unknown'}</div>
    <div>Registered Voter: {userDetails.voter ? 'Yes' : 'No'}</div>
    <ParticipationForm />
  </div>;
}

class Participate extends Component {
  Auth = new AuthHelperMethods();
  isLoggedIn = this.Auth.loggedIn();

  componentDidMount() {
  }

  render() {
    let userForm = <AuthenticationForm />;

    if (this.isLoggedIn) {
      userForm = <UserInformation />;
      // userForm = <ParticipationForm />;
    }

    return (
      <div id="participate">
        <h2>Participate</h2>
        {userForm}

        <br/><br/><br/>
        <br/><br/><br/>
        <br/><br/><br/>
        <br/><br/><br/>
        <br/><br/><br/>

        <div>
          <h3>Register to vote</h3>
          <p>If you want to vote in the 2020 cannabis referendum you need to be registered to vote.</p>
        </div>
        <div>
          <h3>Learn about the referendum</h3>
          <p>Check out our great resources to learn more about the referendum.</p>
          <ul>
            <li>The referendum will be held at the same time as the 2020 general election.</li>
            <li>The referendum will not be binding, although the current government advertises it as such.</li>
            <li>The referendum will make it legal to consume cannabis for medical and recreational use to some degree.</li>
            <li>There will be an age limit of 20 for those purchasing cannabis.</li>
          </ul>
        </div>
        <Logout />
        <br/><br/><br/>
        <br/><br/><br/>
      </div>
    )
  }

}

export default Participate;
