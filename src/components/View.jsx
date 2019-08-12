import React, { Component } from "react";
import { Table, Tab, Button } from "react-bootstrap";
import EditButton from "./EditButton";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "trip"
    };
    this.editClick = this.editClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.plotClick = this.plotClick.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  changeView() {
    const newtype = this.state.type === "trip" ? "meeting" : "trip";
    this.setState({ type: newtype });
  }

  render() {
    const datasets = this.props.datasets.filter(
      dataset => dataset.surveyID === this.state.type
    );
    console.log(datasets);
    return (
      <React.Fragment>
        <br />
        <Button variant="outline-primary" onClick={this.changeView}>
          Switch to {this.state.type === "trip" ? "meetings" : "trips"}
        </Button>
        <Button variant="outline-primary">Include all</Button>
        <Button variant="outline-secondary">Include none</Button>

        <br />
        <Table striped bordered hover>
          {this.buildTable(datasets, ["Name", "Edit", "Delete", "Include"])}
        </Table>
      </React.Fragment>
    );
  }

  buildTable(datasets, keys) {
    return (
      <tbody>
        {/*<tr key="headers">
          {keys.map((key, index) => (
            <th key={"h-" + key}>{key}</th>
          ))}
          </tr>*/}
        {datasets.map((obj, index) => this.buildRow(keys, obj, index))}
      </tbody>
    );
  }

  editClick(event) {
    this.props.editDataset(event.target.id);
  }

  deleteClick(event) {
    const id = event.target.id;
    if (window.confirm("Delete " + this.props.datasets[id].name + "?")) {
      this.props.deleteDataset(id);
    }
  }

  plotClick(event) {
    this.props.plotDataset(event.target.id);
  }

  buildRow(keys, obj, rowindex) {
    return (
      <tr key={"row" + rowindex}>
        <td key={rowindex + "-" + keys[0]}>{obj["name"]}</td>
        <td key={rowindex + "-" + keys[1]}>
          <EditButton type="edit" id={rowindex} onclick={this.editClick} />
        </td>
        <td key={rowindex + "-" + keys[2]}>
          <EditButton type="delete" id={rowindex} onclick={this.deleteClick} />
        </td>
        <td key={rowindex + "-" + keys[3]}>
          <EditButton type="plot" id={rowindex} onclick={this.plotClick} />
        </td>
      </tr>
    );
  }
}

export default View;
