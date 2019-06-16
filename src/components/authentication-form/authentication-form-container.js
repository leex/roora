import React, { Component } from "react";

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

        let login_join_form;

        if (show_login_form) {
            login_join_form = '<div id="login"><p>If you already have an account please login.</p><Button onClick={this.goLogin}>login</Button></div>';

            // login_join_form += <div id="join">
            //     <React.Fragment>
            //         <p>If you do not have an account, you need an invite code first.</p>
            //         <p>Find a trusted Rō Ora agent to get an invite code then join below.</p>
            //         <Button onClick={this.goJoin}>join</Button>
            //     </React.Fragment>
            // </div>;
            console.log(login_join_form);
        }

        return (
            <div id="authentication_form" className="card" dangerouslySetInnerHTML={{ __html: login_join_form }}>
                
            </div>
        );
    }
}

export default AuthenticationForm;
