import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class FormSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            region: null
        };
    }

    onChange = (event) => {
        console.log('rc');
        console.log(event.target.value);
        this.setState({ region: event.target.value });
    }

    render() {
        return (
            <div id="FormSelect" >
                <Form>
                    <Form.Row>
                        <Form.Group
                            controlId="formConfirmRegion"
                            onChange={this.onChange}
                        >
                            <Form.Label></Form.Label>
                            <Form.Control as="select">
                                {this.state.region == null && <option>Select Region</option> }
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

                    <Button variant="primary" type="submit" onClick={() => this.props.onClick(this.state.region)} disabled={(this.state.region == null)}>
                        Confirm Region
                </Button>
                </Form>

            </div>
        );
    }
}

export default FormSelect;
