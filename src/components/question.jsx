import React, { Component } from "react";
import InputForm from "./inputform";

const Question = props => {
  /*this function should build a React component based on input parameters
  The input parameter should contain the question text, which type of input 
  is required and how many input fields.
  */
  console.log(props);

  return buildQuestion(props.q.text);
};

const buildQuestion = q => {
  return (
    <React.Fragment>
      <div>{q}</div>
      <InputForm />
    </React.Fragment>
  );
};

export default Question;
