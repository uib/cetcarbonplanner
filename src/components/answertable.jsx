import React, { Component } from "react";
import { Table, Tab } from "react-bootstrap";

const AnswerTable = ({ answers }) => {
  const keys = Object.keys(answers[0]);
  const data = Object.values(answers);
  return (
    <Table striped bordered hover size="sm">
      {buildTable(keys, data)}
    </Table>
  );
};

const buildTable = (keys, data) => {
  return (
    <thead>
      <tr key="headers">
        {keys.map((key, index) => (
          <th key={"h-" + key}>{key}</th>
        ))}
      </tr>
      {data.map((row, index) => buildRow(keys, row, index))}
    </thead>
  );
};

const buildRow = (keys, obj, rowindex) => {
  return (
    <tr key={"row" + rowindex}>
      {keys.map((key, index) => (
        <td key={index + "-" + key}>{obj[key]}</td>
      ))}
    </tr>
  );
};
export default AnswerTable;
