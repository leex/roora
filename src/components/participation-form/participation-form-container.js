import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ConfirmRegistrationButton(props) {
    return (
        <div id="participation_form" className="card p-3">
            <h5>Confirm Voter Registration</h5>
            <p>
                When you have completed your voter registration, click the
                button below to confirm to the society that you are ready to
                vote.
            </p>
            <Button variant="primary" type="submit" onClick={props.onClick}>
                Confirm Voter Registration
            </Button>
        </div>
    );
}

function RegistrationConfirmed() {
    return (
        <div id="participation_form" className="card p-3">
            <h5>Voter Registration Confirmed</h5>
            <p><b>Congratulations!! You have confirmed that you are registered to
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
            <Form>
                <Form.Row>
                    <Form.Group
                        controlId="formGridState"
                        onChange={props.onChange}
                    >
                        <Form.Label></Form.Label>
                        <Form.Control as="select">
                            <option>Select Region</option>
                            <option>Northland</option>
                            <option>Auckland</option>
                            <option>Waikato</option>
                            <option>Bay of Plenty</option>
                            <option>Gisborne</option>
                            <option>Hawke's Bay </option>
                            <option>Taranaki</option>
                            <option>Manawatu-Wanganui</option>
                            <option>Wellington</option>
                            <option>Tasman</option>
                            <option>Nelson</option>
                            <option>Marlborough</option>
                            <option>West Coast</option>
                            <option>Canterbury</option>
                            <option>Otago</option>
                            <option>Southland</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit" onClick={props.onClick} disabled={props.region == "Select Region" || props.region == null}>
                    Confirm Region
                </Button>
            </Form>
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

    componentDidMount() {}

    RegionConfirmed = () => {
        return (
            <div id="participation_form" className="card p-3">
                <h5>Region Confirmed</h5>
                <small>{this.state.region}</small>
                <p><b>Congratulations!! You have confirmed the region you live in.</b></p>
                <p>
                    You can now participate in polls and help us guide the
                    future of cannabis policy reform in Aotearoa New Zealand.
                </p>
            </div>
        );
    };

    render() {
        let registrationConfirmed;
        let regionConfirmed;

        if (this.state.registration_confirmed) {
            registrationConfirmed = <RegistrationConfirmed />;
        } else {
            registrationConfirmed = <ConfirmRegistrationButton onClick={this.confirmRegistration} />;
        }

        if (this.state.region_confirmed) {
            regionConfirmed = this.RegionConfirmed();
        } else {
            regionConfirmed = <ConfirmRegionButton onChange={this.changeRegion} onClick={this.confirmRegion} region={this.state.region} />;
        }

        return (
            <div>
                {registrationConfirmed}
                {regionConfirmed}
            </div>
        );
    }
}

export default ParticipationForm;
