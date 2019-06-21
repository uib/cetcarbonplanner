import React, { Component } from "react";

const Question = ({ q }) => {
  /*this function should build a React component based on input parameters
  The input parameter should contain the question text, which type of input 
  is required and how many input fields.
  */
  const alternatives = q.alternatives.map(a => (
    <div key={a.key}>
      <label className="form-check-label">
        <input
          className="form-check-input"
          name="radiolist"
          type="radio"
          value={a.key}
        />
        {a.value}
      </label>
    </div>
  ));
  return (
    <React.Fragment>
      <h4>{q.title}</h4>
      <form>
        <div className="form-check">{alternatives}</div>
      </form>
      {q.hours && HourButtons()}
    </React.Fragment>
  );
};

const HourButtons = () => {
  return <div>Hours was true</div>;
};

export default Question;
