import React, { Component } from "react";
import { Table } from "react-bootstrap";
import EditButton from "./EditButton";

class AnswerTable extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }
  render() {
    const keys = Object.keys(this.props.answerlist[0]);
    return this.buildTable(keys, this.props.answerlist);
  }
  buildTable(keys, data) {
    return (
      <Table striped bordered hover size="sm" style={{ fontSize: 13 }}>
        <tbody>
          {data.map((row, index) => this.buildRow(keys, row, index))}
        </tbody>
      </Table>
    );
  }

  buildRow(keys, obj, rowindex) {
    const style = "text-center align-middle";
    return (
      <tr key={"row" + rowindex}>
        {keys.map((key, index) => (
          <td key={index + "-" + key} className={style}>
            {obj[key]}
          </td>
        ))}
        <td key={"del" + rowindex}>
          <EditButton type="delete" id={rowindex} onclick={this.handleDelete} />
        </td>
      </tr>
    );
  }
  handleDelete(event) {
    this.props.deleteFunction(event.target.id);
  }
}

export default AnswerTable;
