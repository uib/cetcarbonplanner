import React, { Component } from "react";

class Survey extends Component {
  state = {
    questions: [],
    data: []
  };
  render() {
    return (
      <React.Fragment>
        this is a survey, basically a list of questions that collect data
      </React.Fragment>
    );
  }
}

export default Survey;
