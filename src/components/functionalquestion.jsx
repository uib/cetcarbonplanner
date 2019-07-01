import React, { Component } from "react";

const FunctionalQuestion = props => {
  const { q } = props;
  const alternatives = q.alternatives.map(a => (
    <div key={a.key}>
      <label className="form-check-label">
        <input className="form-check-input" type="radio" value={a.key} />
        {a.value}
      </label>
    </div>
  ));
  return (
    <React.Fragment>
      <h4>{props.q.title}</h4>
      <form>{alternatives}</form>
    </React.Fragment>
  );
};

export default FunctionalQuestion;
