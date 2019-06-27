import React, { Component } from "react";
import Question from "./question";

class Survey extends Component {
  state = { dataset: [] };
  render() {
    return (
      <React.Fragment>
        <h4>Question:</h4>
        <br />
        <Question q={this.props.surveydata[0]} />
      </React.Fragment>
    );
  }

  reportDataSet() {
    this.props.reportAnswers();
  }
  reportAnswer(answer) {
    const updatedData = [...this.state.dataset].push(answer);
    this.setState({ dataset: updatedData });
    //reportDataSet?
  }
}

export default Survey;
