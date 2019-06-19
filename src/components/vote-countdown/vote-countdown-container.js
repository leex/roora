import React, { Component } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";

export default class VoteCountdown extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <Jumbotron>
        <h2>Countdown To Vote</h2>
        <div className="">
          <ul>
            <li><b>Current Estimated Referendum Outcome:</b> Referendum Fails</li>
            <li>Approximately <b>515 days</b> remain before the potential legalization of cannabis in Aotearoa.</li>
            <li>The referendum has approximately <b>35%</b> voter turnout support and is therefore <b>very unlikely</b> to pass.</li>
            <li>The referendum is non-binding.</li>
          </ul>
        </div>
      </Jumbotron>
    )

  }

}
