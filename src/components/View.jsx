import React, { Component } from "react";
import { Table, Tab, Button } from "react-bootstrap";
import EditButton from "./EditButton";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "trip",
      enabled: Array(this.props.datasets.length).fill(true)
    };
    this.editClick = this.editClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.plotClick = this.plotClick.bind(this);
    this.changeView = this.changeView.bind(this);
    this.includeAll = this.includeAll.bind(this);
    this.includeNone = this.includeNone.bind(this);
  }

  componentDidMount() {
    this.props.plotDataset(this.state.type, this.state.enabled);
  }

  changeView() {
    const newtype = this.state.type === "trip" ? "meeting" : "trip";
    this.setState({ type: newtype });
    this.props.plotDataset(newtype, this.state.enabled);
  }

  render() {
    return (
      <React.Fragment>
        <br />
        <Button variant="outline-primary" onClick={this.changeView}>
          Switch to {this.state.type === "trip" ? "meetings" : "trips"}
        </Button>
        <Button variant="outline-primary" onClick={this.includeAll}>
          Include all
        </Button>
        <Button variant="outline-secondary" onClick={this.includeNone}>
          Include none
        </Button>

        <br />
        <Table striped bordered hover>
          {this.buildTable(this.props.datasets, [
            "Name",
            "Edit",
            "Delete",
            "Include"
          ])}
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

  buildRow(keys, obj, rowindex) {
    if (obj.surveyID === this.state.type) {
      return (
        <tr key={"row" + rowindex}>
          <td key={rowindex + "-" + keys[0]}>{obj["name"]}</td>
          <td key={rowindex + "-" + keys[1]}>
            <EditButton
              type="edit"
              id={rowindex}
              onclick={this.editClick}
              checked={true}
            />
          </td>
          <td key={rowindex + "-" + keys[2]}>
            <EditButton
              type="delete"
              id={rowindex}
              onclick={this.deleteClick}
              checked={true}
            />
          </td>
          <td key={rowindex + "-" + keys[3]}>
            <EditButton
              type="include"
              id={rowindex}
              onclick={this.plotClick}
              checked={this.state.enabled[rowindex]}
            />
          </td>
        </tr>
      );
    }
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

  includeAll() {
    this.updatePlot(
      this.state.type,
      Array(this.props.datasets.length).fill(true)
    );
  }

  includeNone() {
    this.updatePlot(
      this.state.type,
      Array(this.props.datasets.length).fill(false)
    );
  }

  updatePlot(type, list) {
    this.props.plotDataset(type, list);
    this.setState({ enabled: list });
  }

  plotClick(event) {
    const newEnabledList = [...this.state.enabled];
    newEnabledList[event.target.id] = !this.state.enabled[event.target.id];
    //this.props.plotDataset(event.target.id);
    this.updatePlot(this.state.type, newEnabledList);
  }
}

export default View;
