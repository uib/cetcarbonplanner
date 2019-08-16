import React, { Component } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import emissionsguide from "./emissionsguide.jpg";

class Settings extends Component {
  /** This component creates the Settings page, where you define your emissions limits and can wipe stored data. */
  constructor() {
    super();
    this.state = { triplimit: 0, meetinglimit: 0 };
    this.handleTripLimitChange = this.handleTripLimitChange.bind(this);
    this.handleTripLimitSet = this.handleTripLimitSet.bind(this);
    this.handleMeetingLimitChange = this.handleMeetingLimitChange.bind(this);
    this.handleMeetingLimitSet = this.handleMeetingLimitSet.bind(this);
    this.clearStorage = this.clearStorage.bind(this);
  }

  render() {
    const button = "outline-primary w-50";
    return (
      <div id="settings">
        <img src={emissionsguide} alt="" />
        <br />
        <br />
        Your CO2 emissions target for travel is{" "}
        {this.props.triplimit === 0
          ? "not yet set."
          : this.props.triplimit + " tons CO2e per year"}
        <Form
          onSubmit={this.handleTripLimitSet}
          onChange={this.handleTripLimitChange}
        >
          <InputGroup className="md-4">
            <FormControl
              type="number"
              placeholder="Target for CO2 emissions (tons) from travel."
              aria-label="Target for CO2 emissions (tons) from travel."
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="primary" type="submit">
                Set target
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        <br />
        Your CO2 emissions target for meetings is{" "}
        {this.props.meetinglimit === 0
          ? "not yet set."
          : this.props.meetinglimit + " tons CO2e per year"}
        <Form
          onSubmit={this.handleMeetingLimitSet}
          onChange={this.handleMeetingLimitChange}
        >
          <InputGroup className="md-4">
            <FormControl
              type="number"
              placeholder="Target for CO2 emissions (tons) from meetings."
              aria-label="Target for CO2 emissions (tons) from meetings."
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="primary" type="submit">
                Set target
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        <br />
        <br />
        <p>
          In this current beta version, data is only stored in this browser. No
          cookies or cloud storage is used. If you clear your browsing history,
          the data will be erased.
        </p>
        <p>
          <Button
            className={button}
            disabled={window.localStorage.length === 0}
            onClick={this.clearStorage}
          >
            Clear data from browser
          </Button>
        </p>
        <p>
          <Button className={button} disabled={true}>
            Save data to disk
          </Button>
        </p>
        <p>
          <Button className={button} disabled={true}>
            Export to spreadsheet
          </Button>
        </p>
      </div>
    );
  }

  handleTripLimitChange(event) {
    this.setState({ triplimit: event.target.value });
  }

  handleMeetingLimitChange(event) {
    this.setState({ meetinglimit: event.target.value });
  }

  handleTripLimitSet(event) {
    event.preventDefault();
    const number = Number(this.state.triplimit);
    if (typeof number === "number" && number > 0) {
      this.props.limitfunction("trip", number);
    }
  }
  handleMeetingLimitSet(event) {
    event.preventDefault();
    const number = Number(this.state.meetinglimit);
    if (typeof number === "number" && number > 0) {
      this.props.limitfunction("meeting", number);
    }
  }

  clearStorage() {
    if (window.confirm("Clear data?")) {
      window.localStorage.clear();
    }
    this.setState({ state: this.state });
  }
}

export default Settings;
