import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Settings extends Component {
  constructor() {
    super();
    this.state = { limit: 20 };
    this.handleLimitInput = this.handleLimitInput.bind(this);
    this.handleLimitSet = this.handleLimitSet.bind(this);
    this.clearStorage = this.clearStorage.bind(this);
  }

  handleLimitInput(event) {
    this.setState({ limit: event.target.value });
  }

  handleLimitSet() {
    this.props.limitfunction(this.state.limit);
  }

  componentDidMount() {
    this.setState({
      limit: this.props.carbonlimit
    });
  }

  clearStorage() {
    if (window.confirm("Clear data?")) {
      window.localStorage.clear();
    }
    this.setState({ state: this.state });
  }

  render() {
    const button = "outline-primary";
    const disabled = "outline-secondary";
    return (
      <div id="settings">
        {" "}
        Your carbon limit is{" "}
        {this.props.carbonlimit
          ? this.props.carbonlimit + " tons CO2e per year"
          : "currently unset."}
        <br />
        <form onSubmit={this.handleLimitSet}>
          <label>
            <input
              type="number"
              value={this.state.limit}
              onChange={this.handleLimitInput}
            />
          </label>
        </form>
        <Button className={button} onClick={this.handleLimitSet}>
          Set CO2 limit
        </Button>
        <br />
        <p>
          In this current beta version, data is only stored in this browser. No
          cookies or cloud storage is used. If you clear your browsing history,
          the data will be erased.
        </p>
        <p>
          <Button
            className={disabled}
            disabled={window.localStorage.length === 0}
            onClick={this.clearStorage}
          >
            Clear data from browser
          </Button>
        </p>
        <p>
          <Button className={disabled} disabled={true}>
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
}

export default Settings;
