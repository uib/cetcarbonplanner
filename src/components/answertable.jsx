import React, { Component } from "react";
import { Table, Tab } from "react-bootstrap";

const AnswerTable = ({ answerlist }) => {
  const keys = Object.keys(answerlist[0]);
  return (
    <Table striped bordered hover size="sm">
      {buildTable(keys, answerlist)}
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
