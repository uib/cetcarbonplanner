import React, { Component } from "react";
import { Table, Tab } from "react-bootstrap";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render_test() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }

  render() {
    return (
      <React.Fragment>
        This is the View page, the dataset is {this.props.datasets.length} long.
        <Table striped bordered hover>
          {this.buildTable(this.props.datasets, ["Name", "Edit", "Delete"])}
        </Table>
      </React.Fragment>
    );
  }

  buildTable(datasets, keys) {
    return (
      <thead>
        <tr key="headers">
          {keys.map((key, index) => (
            <th key={"h-" + key}>{key}</th>
          ))}
        </tr>
        {datasets.map((obj, index) => this.buildRow(keys, obj, index))}
      </thead>
    );
  }

  buildRow(keys, obj, rowindex) {
    return (
      <tr key={"row" + rowindex}>
        <td key={rowindex + "-" + keys[0]}>{obj["name"]}</td>
        <td key={rowindex + "-" + keys[1]}>Edit button</td>
        <td key={rowindex + "-" + keys[2]}>Delete button</td>
      </tr>
    );
  }
}

export default View;
