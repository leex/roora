import React, { Component } from 'react';

class Participate extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div id="participate">
        <h2>Rō Ora Participate</h2>
        
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
            <li>There will be an age limit for those purchasing cannabis.</li>
          </ul>
        </div>
      </div>
    )
  }

}

export default Participate;
