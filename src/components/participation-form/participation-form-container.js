import React, { Component } from "react";

import Button from "react-bootstrap/Button";

import useStore from "../../helpers/store.js";

import FormSelect from "../form-select";

function RegistrationPanel(props) {
    const state = useStore();

    if (state.voter) {
        return <RegistrationConfirmed />;
    } else {
        return <ConfirmRegistrationButton onClick={state.actions.confirmRegistration} />;
    }
}

function RegionPanel(props) {
    const state = useStore();

    if (state.region) {
        return <RegionConfirmed region={state.region} />;
    } else {
        return <ConfirmRegionButton onClick={state.actions.confirmRegion} />;
    }
}

function ConfirmRegistrationButton(props) {
    return (
        <div id="participation_form" className="card p-3">
            <h5>Confirm Voter Registration</h5>
            <p>
                When you have completed your voter registration, click the
                button below to confirm to the society that you are ready to
                vote.
            </p>
            <Button variant="primary" type="submit" onClick={props.onClick} >
                Confirm Voter Registration
            </Button>
        </div>
    );
}

function RegistrationConfirmed() {
    return (
        <div id="participation_form" className="card p-3">
            <h5>Voter Registration Confirmed</h5>
            <p><b>Nice work! You have confirmed that you are registered to
                vote in the 2020 Cannabis Referendum.</b></p>
            <p>
                If you can now help one other person to complete their
                registration, we will be certain to succeed in making our world
                better.
            </p>
        </div>
    );
}


function ConfirmRegionButton(props) {
    return (
        <div id="participation_form" className="card p-3">
            <h5>Confirm Region</h5>
            <p>
                If you choose to provide us with your region below then we can more accurately use your commenst and poll data to achieve the outcomes you want.
                <br />
                *ou
                <br />
                You cannot participate in regional polls or discussions until you have provided your region. *To join your regions discussions, select your region below.
                <br />
            </p>
            <FormSelect onClick={props.onClick} />
        </div>
    );
}

function RegionConfirmed(props) {
    return (
        <div id="participation_form" className="card p-3">
        <h5>Region Confirmed</h5>
        <small>{props.region}</small>
        <p><b>Ka Pai! You have confirmed the region you live in.</b></p>
        <p>
            You can now participate in polls and help us guide the
            future of cannabis policy reform in Aotearoa New Zealand.
        </p>
    </div>
    );
}

class ParticipationForm extends Component {
    constructor(props) {
        super(props);

        this.confirmRegistration = this.confirmRegistration.bind(this);
        this.confirmRegion = this.confirmRegion.bind(this);

        this.state = {
            registration_confirmed: false,
            region_confirmed: false,
            region: null
        };
    }

    confirmRegistration() {
        this.setState({ registration_confirmed: true });
    }

    confirmRegion() {
        this.setState({ region_confirmed: true });
    }

    changeRegion = (event) => {
        this.setState({ region: event.target.value });
    }

    componentDidMount() { }

    render() {
        let registrationConfirmed;
        let regionConfirmed;

        registrationConfirmed = <RegistrationPanel confirmRegistration={this.confirmRegistration} />;
        regionConfirmed = <RegionPanel confirmRegistration={this.confirmRegion} />;

        return (
            <div>
                {registrationConfirmed}
                {regionConfirmed}
            </div>
        );
    }
}

export default ParticipationForm;
