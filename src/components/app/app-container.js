import React, { Component } from "react";

import Welcome from "../welcome";

import About from "../about";

import News from "../news";

import Participate from "../participate";

import AlertDismissible from "../alert-dismissable";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import "./app.css";

import Logo from "../../assets/cannabis_logo.png";

import useStore from "../../helpers/store.js";

import AuthHelperMethods from "../../helpers/auth/AuthHelperMethods";

function LoggedInMemberView() {
    return <AlertDismissible dismissible variant="warning">You are logged in.</AlertDismissible>;
}

function LoggedInAgentView() {
    return <AlertDismissible dismissible variant="info">You are an agent.</AlertDismissible>;
}

function LoggedInAdminView() {
    return <AlertDismissible dismissible variant="primary">You are an admin.</AlertDismissible>;
}

function UserNav() {
    const actions = useStore(state => state.actions);

    actions.getDetails();

    const loaded = useStore(state => state.loaded);
    const admin = useStore(state => state.admin);
    const agent = useStore(state => state.agent);

    let output = (
        <div>
            {loaded === true ? <LoggedInMemberView /> : ""}
            {agent === true ? <LoggedInAgentView /> : ""}
            {admin === true ? <LoggedInAdminView /> : ""}
        </div>
    );

    return output;
}

class App extends Component {
    Auth = new AuthHelperMethods
    isLoggedIn = this.Auth.loggedIn();

    componentDidMount() {}

    render() {
        return (
            <Router basename={process.env.REACT_APP_SUBDIR}>
                <section id="page">
                    <Navbar
                        fixed="bottom"
                        bg="light"
                        variant="light"
                        className="p-0"
                        role="navigation"
                    >
                        <div>
                            {this.isLoggedIn === true ? <UserNav /> : ''}
                            <ButtonGroup
                                size=""
                                className="row m-0"
                                style={{ width: "100%" }}
                            >
                                <Link to="/" className="rounded-0 col-6">
                                    <Button variant="primary">Home</Button>
                                </Link>
                                <Link to="/about" className="rounded-0 col-6">
                                    <Button variant="danger">About</Button>
                                </Link>
                                <Link
                                    to="/participate"
                                    className="rounded-0 col-6"
                                >
                                    <Button variant="warning">
                                        Participate
                                    </Button>
                                </Link>
                                <Link to="/news" className="rounded-0 col-6">
                                    <Button variant="success">NEWS</Button>
                                </Link>
                            </ButtonGroup>
                        </div>
                    </Navbar>
                    <div id="header" className="pb-2">
                        <div className="logo">
                            <img
                                src={Logo}
                                alt="logo"
                                className=""
                                style={{ width: "50px", height: "auto" }}
                            />
                        </div>
                        <div className="col">
                            <h1>Rau&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ora</h1>
                        </div>
                        <div className="">Talking cannabis in Aotearoa</div>
                    </div>
                    <div id="content" className="p-3">
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/news" component={News} />
                        <Route exact path="/participate" component={Participate} />
                    </div>
                </section>
            </Router>
        );
    }
}

export default App;
