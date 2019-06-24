import React, { Component } from "react";
import Question from "./question";

class Survey extends Component {
  render() {
    return (
      <React.Fragment>
        <h4>Question:</h4>
        <br />
        <Question q={this.props.questions[0]} />
      </React.Fragment>
    );
  }
}

export default Survey;
