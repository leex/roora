import React, { Component } from 'react';

import VoteCountdown from "../vote-countdown";

class Welcome extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="pt-2">
        <VoteCountdown />
        <div className="content">
          <p>Haere mai, here you will be able to actively participate in discussions about hemp, medical cannabis and recreational cannabis use in Aotearoa.</p>
          <p>These discussions are linked via the council to real outcomes - so our discussions today become real policy tomorrow.</p>
        </div>
      </div>
    )
  }

}

export default Welcome;
