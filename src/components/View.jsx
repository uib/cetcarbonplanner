import React, { Component } from "react";
import { Table, Tab } from "react-bootstrap";
import EditButton from "./EditButton";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    return (
      <tr key={"row" + rowindex}>
        <td key={rowindex + "-" + keys[0]}>{obj["name"]}</td>
        <td key={rowindex + "-" + keys[1]}>
          <EditButton
            type="edit"
            id={rowindex}
            callback={() => {
              console.log("test success");
            }}
          />
        </td>
        <td key={rowindex + "-" + keys[2]}>
          <EditButton
            type="delete"
            id={rowindex}
            callback={() => {
              console.log("test success");
            }}
          />
        </td>
      </tr>
    );
  }
}

export default View;
