import React, { Component } from "react";

const Question = ({ q }) => {
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
      <p>{q.title}</p>
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
