import React, { Component } from "react";

import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

class AuthenticationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: false,
            join: false
        };
    }

    goLogin = () => {
        this.setState({ login: true });
    }

    goJoin = () => {
        this.setState({ join: true });
    }

    render() {
        
        var show_login_form = (!this.state.login && !this.state.join);

        if (show_login_form) {
            return (
                <Link to="/login" className="rounded-0 col-6">
                    <Button variant="primary">Login</Button>
                </Link>
            )
            // login_join_form = '<div id="login"><p>If you already have an account please login.</p><Button onClick={this.goLogin}>login</Button></div>';

            // login_join_form += <div id="join">
            //     <React.Fragment>
            //         <p>If you do not have an account, you need an invite code first.</p>
            //         <p>Find a trusted Rō Ora agent to get an invite code then join below.</p>
            //         <Button onClick={this.goJoin}>join</Button>
            //     </React.Fragment>
            // </div>;
            // console.log(login_join_form);
        }

        return (
            <div id="authentication_form" className="card">
                
            </div>
        );
    }
}

export default AuthenticationForm;
