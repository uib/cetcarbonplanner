import React, { Component } from "react";
import { Table, Tab } from "react-bootstrap";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        This is the View page, the dataset is {this.props.datasets.length} long.
        <table className="table-striped">
          {this.buildTable(this.props.datasets, ["Name", "Edit", "Delete"])}
        </table>
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
