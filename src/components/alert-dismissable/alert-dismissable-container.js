import React, { Component } from "react";

import Alert from "react-bootstrap/Alert";

export default class AlertDismissible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    const handleDismiss = () => this.setState({ show: false });
    if (this.state.show) {
      return (
        <Alert variant={this.props.variant} onClose={handleDismiss} dismissible>
          {this.props.children}
        </Alert>
      );
    }
    return "";
  }
}