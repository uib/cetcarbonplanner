import React, { Component } from "react";

const Question = props => {
  /*this function should build a React component based on input parameters
  The input parameter should contain the question text, which type of input 
  is required and how many input fields.
  */
  console.log(props);
  return buildQuestion(props.q.text);
};

const buildQuestion = q => {
  return <div>{q}</div>;
};

export default Question;
