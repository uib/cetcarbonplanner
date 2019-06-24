import React, { Component } from "react";
import { Table, Tab } from "react-bootstrap";

const AnswerTable = ({ answers }) => {
  const keys = Object.keys(answers[0]);
  return (
    <Table striped="true" bordered="true" hover="true" size="sm">
      <thead>
        <tr>
          <th>Mode</th>
          <th>Hours</th>
        </tr>
        <tr>
          <td>{2 + 2}</td>
          <td>{4 * 7}</td>
        </tr>
        <tr>
          <td>{2 + 2}</td>
          <td>{4 * 7}</td>
        </tr>
      </thead>
    </Table>
  );
};

const buildtable = (keys, answers) => {
  return (
    <thead>
      {buildRow(keys, "th")}
      {/*{buildDataRows(keys, answers)}*/}
    </thead>
  );
};
const buildRow = (array, tag) => {
  return;
};
export default AnswerTable;
