import React, { Component } from "react";
import { Table, Tab } from "react-bootstrap";

const AnswerTable = ({ answers }) => {
  const keys = Object.keys(answers[0]);
  const data = Object.values(answers);
  return (
    <Table striped={true} bordered={true} hover={true} size="sm">
      {buildTable(keys, data)}
    </Table>
  );
};

const buildTable = (keys, data) => {
  return (
    <thead>
      <tr>
        {keys.map(key => (
          <th>{key}</th>
        ))}
      </tr>
      {data.map(row => buildRow(keys, row))}
    </thead>
  );
};

const buildRow = (keys, obj) => {
  return (
    <tr>
      {keys.map(key => (
        <td>{obj[key]}</td>
      ))}
    </tr>
  );
};
export default AnswerTable;
