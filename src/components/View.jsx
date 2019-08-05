import React, { Component } from "react";
import { Table, Tab } from "react-bootstrap";
import EditButton from "./EditButton";

class View extends Component {
  constructor(props) {
    super(props);
    this.editClick = this.editClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.plotClick = this.plotClick.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <Table striped bordered hover>
          {this.buildTable(this.props.datasets, [
            "Name",
            "Edit",
            "Delete",
            "Plot"
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
