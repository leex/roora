import React, { Component } from "react";

/* We want to import our 'AuthHelperMethods' component in order to send a login request */
import AuthHelperMethods from '../../helpers/auth/AuthHelperMethods';
import './login.css'

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

class Login extends Component {

    /* In order to utilize our authentication methods within the AuthService class, we want to instantiate a new object */
    Auth = new AuthHelperMethods();

    state = {
        username: "",
        password: ""
    }

    /* Fired off every time the use enters something into the input fields */
    _handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit = (e) => {
        
        e.preventDefault();
        /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
        this.Auth.login(this.state.username, this.state.password)
            .then(res => {
                if (res === false) {
                    return alert("Sorry those credentials don't exist!");
                }
                this.props.history.replace('/');
            })
            .catch(err => {
                alert(err);
            })
    }

    componentWillMount() {
        /* Here is a great place to redirect someone who is already logged in to the protected route */
        
        // if (this.Auth.loggedIn())
        //     this.props.history.replace('/');
    }

    render() {
        return (
            <React.Fragment>
                <div className="main-wrapper">
                    <div className="">
                        <div className="">
                            <h1>Login</h1>
                        </div>
                        <form className="">
                            <Form.Control onChange={this._handleChange} type="text" name="username" placeholder="invite code" />
                            <Form.Control onChange={this._handleChange} type="password" name="password" placeholder="password" />
                            <Button className="form-submit" onClick={this.handleFormSubmit}>Login</Button>
                        </form>
                    </div>
                    {/* <div className="signiture">
                        <h1>Template Built & Designed by Roman Chvalbo</h1>
                    </div> */}
                </div>
                
            </React.Fragment>
        );
    }
}
export default Login;