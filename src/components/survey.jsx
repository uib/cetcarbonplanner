import React, { Component } from "react";
import Question from "./question";

class Survey extends Component {
  render() {
    return (
      <React.Fragment>
        <Question q={this.props.surveydata[0]} />
      </React.Fragment>
    );
  }
}

export default Survey;
